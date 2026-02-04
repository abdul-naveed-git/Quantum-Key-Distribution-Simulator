# Frontend Enhancement - Technical Reference Guide

## Quick Start

### Running the Enhanced Frontend

1. **Install dependencies** (if not already done):
   ```bash
   cd frontend
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm start
   ```

3. **Open in browser**:
   ```
   http://localhost:3000
   ```

4. **Ensure backend is running**:
   ```bash
   cd backend
   python app.py  # Backend should be running on http://localhost:5000
   ```

---

## Component Architecture

### Component Dependency Graph

```
App.js (Main Container)
├── ChatHelpBot (existing)
├── QuantumChannel (existing)
├── ResultsTable (existing)
├── AES Encryption Section (existing)
├── StepTimeline (NEW) ✨
│   ├── Uses: isRunning, tableData, siftedKey, qber, encryptedData, decryptedMessage
│   └── Updates: Real-time step completion tracking
├── StatusBadges (NEW) ✨
│   ├── Uses: qber, siftedKey
│   └── Updates: Security status indicators
└── SecureQuantumChat (NEW) ✨
    ├── Uses: siftedKey, encryptedData, decryptedMessage, qber
    └── Internal State: aliceMessage, chatMessages, isSimulating
```

---

## Component API Reference

### 1. SecureQuantumChat Component

**Location:** `frontend/src/SecureQuantumChat.js`

**Props:**
```javascript
{
  siftedKey: Array<number>,        // [0,1,1,0,...] - Generated quantum key
  encryptedData: Object|null,      // {ciphertext: string, ...}
  decryptedMessage: string,        // Decrypted message text
  qber: string                     // "15.5" - Quantum Bit Error Rate %
}
```

**Features:**
- Alice input panel at left
- Encryption pipeline visualization in center
- Bob display panel at right
- Message transformation stages:
  - Plaintext → Quantum Key → AES Encryption → Ciphertext → Quantum Channel → AES Decryption → Plaintext

**Internal State:**
- `aliceMessage` - Current input text
- `chatMessages` - Array of sent messages with transformation stages
- `isSimulating` - Animation state during transmission

**Security Gating:**
```javascript
const isKeyValid = siftedKey.length > 0 && parseFloat(qber) <= 20;
// Chat is disabled when QBER > 20%
```

**Styling Classes:**
- `.secure-quantum-chat` - Main container
- `.chat-panel` - Alice/Bob panels
- `.encryption-pipeline` - Center pipeline visualization
- `.message-bubble` - Message containers
- `.message-stages` - Transformation stages display

---

### 2. StatusBadges Component

**Location:** `frontend/src/StatusBadges.js`

**Props:**
```javascript
{
  qber: string,              // "15.5" - Error rate percentage
  siftedKey: Array<number>   // [0,1,1,0,...] - Generated key
}
```

**Displays Three Badges:**

**A. Quantum Channel Badge**
- States:
  - ✅ **Secure** (Green): QBER ≤ 20% AND key exists
  - ⚠️ **Compromised** (Red): QBER > 20%
  - 📡 **Initializing** (Yellow): No key yet
- Shows: QBER percentage in detail

**B. Key Status Badge**
- States:
  - 🔑 **Valid** (Cyan): Key bits generated
  - ⭕ **Not Generated** (Gray): No key yet
- Shows: Number of bits

**C. Security Alert Badge** (conditional)
- Appears only when QBER > 20%
- Shows: "Eavesdropping Detected!"
- Animation: Shake effect with pulsing glow

**Styling Classes:**
- `.status-badges-container` - Flex wrapper
- `.status-badge` - Individual badge styling
- `.status-badge.secure/compromised/valid/invalid` - State-specific colors
- `.status-indicator` - Animated status dot

---

### 3. StepTimeline Component

**Location:** `frontend/src/StepTimeline.js`

**Props:**
```javascript
{
  isRunning: boolean,        // Is simulation currently running?
  tableData: Array,          // Raw table data rows
  siftedKey: Array<number>,  // Generated key bits
  qber: string,              // Error rate percentage
  encryptedData: Object|null, // Encrypted message data
  decryptedMessage: string   // Decrypted text
}
```

**Six Protocol Steps:**
1. **Qubits** (💡) → Completed when: `tableData.length > 0`
2. **Basis Matching** (🎯) → Completed when: `tableData.length > 5`
3. **Key Sifting** (🔍) → Completed when: `siftedKey.length > 0`
4. **Error Detection** (⚠️) → Completed when: `qber >= 0` (always after simulation)
5. **AES Encryption** (🔐) → Completed when: `encryptedData !== null`
6. **Secure Chat** (💬) → Completed when: `decryptedMessage !== ""`

**Visual Indicators:**
- Blue circles for pending steps
- Green circles with checkmarks for completed steps
- Animated connectors between steps
- Pulsing effect during active simulation

**Styling Classes:**
- `.step-timeline-container` - Main container
- `.steps-track` - Horizontal track
- `.step-item` - Individual step
- `.step-circle` - Step indicator circle
- `.step-connector` - Line between steps
- `.step-checkmark` - Completion indicator

---

## State Flow Diagram

```
Backend API Call (/api/bb84)
        ↓
    setTableData()
        ↓
    [StepTimeline: Qubits step completes]
        ↓
    More table rows...
        ↓
    [StepTimeline: Basis Matching completes]
        ↓
    setHighlightedRow() → setSiftedKey()
        ↓
    [StepTimeline: Key Sifting completes]
    [StatusBadges: Updates display]
    [SecureQuantumChat: Enables if QBER ≤ 20%]
        ↓
    setQBER()
        ↓
    [StepTimeline: Error Detection completes]
    [StatusBadges: Updates channel status]
        ↓
    User encrypts message (/api/encrypt)
        ↓
    setEncryptedData()
        ↓
    [StepTimeline: AES Encryption completes]
        ↓
    User decrypts message (/api/decrypt)
        ↓
    setDecryptedMessage()
        ↓
    [StepTimeline: Secure Chat completes]
```

---

## Styling System

### Color Palette (Integrated with Existing Theme)

```css
/* Blues */
--quantum-blue: #3b82f6;     /* Primary action */
--quantum-teal: #06b6d4;     /* Key status */

/* Purples */
--quantum-purple: #8b5cf6;   /* Secondary action */

/* Status Colors */
--success: #10b981;          /* Secure/Valid states */
--warning: #f59e0b;          /* Initializing/Warning */
--danger: #ef4444;           /* Compromised/Invalid */
```

### Animation Library

**Framer Motion Animations:**
- Fade-in on component mount
- Slide animations for messages
- Pulse effects for status indicators
- Shake animation for alerts
- Smooth transitions on all state changes

**Custom Keyframe Animations:**
- `@keyframes pulse-danger` - Red pulsing glow
- `@keyframes shake` - Tremor effect
- `@keyframes glow` - Status indicator glow
- `@keyframes slideIn` - Message entrance

---

## Integration Points with Existing Code

### State Dependencies

These components read from `App.js` state but **do not modify it**:

| Component | Reads From | Effect |
|-----------|-----------|---------|
| StepTimeline | isRunning, tableData, siftedKey, qber, encryptedData, decryptedMessage | Pure view layer |
| StatusBadges | qber, siftedKey | Pure view layer |
| SecureQuantumChat | siftedKey, qber | Read only; owns internal chat state |

### No API Calls in New Components

- ✅ All API calls happen in existing `App.js`
- ✅ New components are purely presentational
- ✅ Message "sending" is visual simulation (no backend call)
- ✅ Encryption visualization does not re-encrypt

---

## Responsive Design Behavior

### Desktop (>1024px)
```
┌──────────────────────┐
│   Step Timeline      │ (Full width)
├──────────────────────┤
│  Status Badges       │ (Full width)
├───────┬──────┬───────┤
│Alice  │Pipeline│ Bob  │ (3 columns)
│Panel  │(Visual)│ Panel│
└───────┴──────┴───────┘
```

### Tablet (768-1024px)
```
┌──────────────────────┐
│   Step Timeline      │ (Vertical steps)
├──────────────────────┤
│  Status Badges       │ (Stacked)
├──────────────────────┤
│     Alice Panel      │
├──────────────────────┤
│  Pipeline (vertical) │
├──────────────────────┤
│      Bob Panel       │
└──────────────────────┘
```

### Mobile (<768px)
```
┌────────────────┐
│ Step Timeline  │ (Stack)
├────────────────┤
│Status Badges   │ (Stack)
├────────────────┤
│  Alice Panel   │
├────────────────┤
│  Bob Panel     │
└────────────────┘
```

---

## Common Issues & Troubleshooting

### Issue: Components not rendering
**Solution:** Ensure imports are at top of `App.js`:
```javascript
import SecureQuantumChat from "./SecureQuantumChat";
import StatusBadges from "./StatusBadges";
import StepTimeline from "./StepTimeline";
```

### Issue: Chat disabled/grayed out
**Reason:** Either no key generated or QBER > 20%
**Solution:** Run simulation with low Eve probability to get valid key

### Issue: Status badges not updating
**Reason:** Components are reading props but may not be re-rendering
**Solution:** Ensure parent state updates trigger re-render (it should automatically with React hooks)

### Issue: Timeline steps not completing
**Reason:** Component checks specific state values
**Solution:** Ensure simulation runs completely and populates all required state

---

## Performance Notes

- **No performance impact:** New components are efficient, pure presentation
- **Animation throttling:** Framer Motion handles animations smoothly
- **Memory usage:** Chat messages stored in component state (cleared on new simulation)
- **Re-render optimization:** Components only re-render when props change

---

## Future Enhancement Ideas

1. **Export chat history** - Download message log
2. **Message persistence** - Save across session
3. **Key visualization** - Show binary key as bars/grid
4. **Attack simulation** - Show Eve's intercepted attempts
5. **Statistics** - Charts of QBER over time
6. **Benchmark** - Performance metrics display

---

## File Modification Summary

### Created Files
- ✅ `frontend/src/SecureQuantumChat.js` (264 lines)
- ✅ `frontend/src/StatusBadges.js` (120 lines)
- ✅ `frontend/src/StepTimeline.js` (118 lines)

### Modified Files
- ✅ `frontend/src/App.js` (+20 lines: imports and component calls)
- ✅ `frontend/src/styles.css` (+900 lines: new component styling)

### Total Changes
- **New code:** ~1,400 lines
- **Modified code:** ~20 lines (safe integration points only)
- **Breaking changes:** 0 (fully backward compatible)

---

## Deployment Checklist

- [x] All imports properly defined
- [x] No console errors or warnings
- [x] Components render without data
- [x] Responsive design tested
- [x] Animations smooth
- [x] Security gating works (disabled when QBER > 20%)
- [x] Timeline steps track correctly
- [x] Status badges update realtime
- [x] Chat messages display correctly
- [x] All existing features still work

---

## Support & Questions

For questions about:
- **Component props:** Check component JSX comments
- **Styling:** See `.css` classes with same names as components
- **Integration:** Review props passed in `App.js` return statement
- **Logic:** Components use existing state only, no new calculations

---

**Last Updated:** February 3, 2026
**Version:** 1.0 - Initial Enhancement
**Status:** Production Ready ✅
