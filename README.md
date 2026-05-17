# 🔐 Quantum Key Distribution (QKD) Simulator

![Quantum Banner](https://img.shields.io/badge/Quantum-Cryptography-blueviolet?style=for-the-badge)
![React](https://img.shields.io/badge/Frontend-React-61DAFB?style=for-the-badge\&logo=react)
![Flask](https://img.shields.io/badge/Backend-Flask-000000?style=for-the-badge\&logo=flask)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

A modern simulation platform that demonstrates how **Quantum Key Distribution (QKD)** enables secure communication using the principles of quantum mechanics.

This project visually explains how two users can exchange secret cryptographic keys securely while detecting any eavesdropping attempts.

---

# 📸 Project Preview

## 🖥️ QKD Simulation Interface

![QKD Simulator UI](https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80\&w=1200\&auto=format\&fit=crop)

## 🔑 Quantum Encryption Concept
<img width="998" height="835" alt="Screenshot 2026-05-17 214848" src="https://github.com/user-attachments/assets/e3d24155-9b17-43b1-b141-6ae0e39ae49a" />

## 🌐 Secure Communication Visualization
<img width="945" height="888" alt="Screenshot 2026-05-17 214808" src="https://github.com/user-attachments/assets/bcf618df-7f74-49ea-b58b-891041d6d003" />

---

# 🚀 Features

* 🔐 Simulates Quantum Key Distribution workflow
* 👨‍💻 Interactive frontend built using React
* ⚡ Backend powered by Flask
* 🧠 Demonstrates BB84 protocol concepts
* 🛰️ Simulates secure quantum communication
* 🚨 Detects eavesdropping attempts
* 📊 Visual representation of quantum states
* 🎯 Educational and beginner-friendly interface

---

# 🧩 Tech Stack

| Technology | Usage                    |
| ---------- | ------------------------ |
| React.js   | Frontend UI              |
| Flask      | Backend API              |
| CSS3       | Styling                  |
| JavaScript | Application Logic        |
| Python     | Quantum Simulation Logic |

---

# 📂 Project Structure

```bash
Quantum-Key-Distribution-Simulator/
│
├── backend/
│   ├── app.py
│   └── requirements.txt
│
├── frontend/
│   ├── public/
│   └── src/
│       ├── App.js
│       ├── SecureQuantumChat.js
│       ├── StepTimeline.js
│       ├── styles.css
│       └── config.js
│
├── README.md
└── README_ENHANCEMENT.md
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/Quantum-Key-Distribution-Simulator.git
cd Quantum-Key-Distribution-Simulator
```

---

## 2️⃣ Backend Setup

```bash
cd backend
pip install -r requirements.txt
python app.py
```

Backend runs on:

```bash
http://localhost:5000
```

---

## 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend runs on:

```bash
http://localhost:3000
```

---

# 🔄 How Quantum Key Distribution Works

```text
Alice Generates Qubits
          ↓
Random Quantum Bases Selected
          ↓
Qubits Sent Through Quantum Channel
          ↓
Bob Measures Incoming Qubits
          ↓
Basis Reconciliation
          ↓
Shared Secret Key Generated
          ↓
Eavesdropping Detection
```

---

# 🧠 BB84 Protocol Overview

The simulator demonstrates the famous **BB84 Quantum Cryptography Protocol**, where:

* Alice sends randomly polarized qubits.
* Bob randomly chooses measurement bases.
* Matching bases form the secret key.
* Any interception introduces detectable errors.

This showcases how quantum mechanics provides security that classical encryption cannot guarantee.

---

# 🎯 Use Cases

* 📚 Learning Quantum Cryptography
* 🎓 Academic Demonstrations
* 🔬 Research Prototypes
* 🧠 Understanding Secure Communication
* 💻 Educational Simulation Projects

---

# 🌟 Future Enhancements

* Add real-time quantum visualizations
* Multi-user secure communication
* Advanced quantum protocols
* Quantum noise simulation
* Improved analytics dashboard
* Dark mode support

---

# 🤝 Contribution

Contributions are welcome.

```bash
Fork the repository
Create a feature branch
Commit your changes
Push to your branch
Open a Pull Request
```

---

# 📜 License

This project is intended for educational and research purposes.

---

# 👨‍💻 Author

Developed as a Quantum Cryptography simulation project to explore secure communication using the principles of quantum mechanics.

---

# ⭐ Support

If you found this project useful:

⭐ Star the repository
🍴 Fork the project
📢 Share with others
