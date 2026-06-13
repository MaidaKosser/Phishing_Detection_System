# Phishing Website Detection System

A Full-Stack Deep Learning Web Application that detects malicious and phishing URLs. The system features a modern **React (Vite)** frontend user interface connected locally to a robust **Flask (Python)** backend pipeline powered by an Artificial Neural Network.

## Model Specifications & Architecture

* **Core Model:** `MLPClassifier` (Multi-Layer Perceptron) — An **Artificial Neural Network (ANN)**.
* **Text Feature Processing:** `TF-IDF Vectorizer` (Term Frequency-Inverse Document Frequency) using a Custom Tokenizer Function (`clean_url`).
* **Dataset Source:** Balanced Kaggle Phishing Dataset (80,000+ records).
* **Model Accuracy:** **95% Validation Accuracy** achieved locally.
* **Architecture Hybridization:** Includes an optimized production-level **Master Whitelist Safety Layer** inside the API to handle *Data Drift* and prevent *False Positives* on mainstream modern domains (e.g., ChatGPT, Gemini, YouTube).

## System Architecture & Hybrid Logic

### The "False Positive" Challenge (Data Drift)
Standard machine learning models suffer from data drift. Because older training datasets do not contain modern AI domains (like `chatgpt.com` or `gemini.google.com`), the sub-word tokenization sequences of the TF-IDF vectorizer can cause the Neural Network to falsely flags legitimate newer URLs as **Phishing** due to minor structural token similarities with old malicious vectors.

### The Production Solution
To achieve a foolproof environment, this system implements a **Hybrid Pipeline**:
1.  **Whitelist Filtering Layer:** When an input URL is received, the API pre-checks it against a secure structural array of trusted standard keywords and safe educational/governmental extensions (`.edu`, `.gov`). If no malicious sub-tokens (like `secure-login`) are found, it instantly returns **Safe**.
2.  **Neural Network Fallback:** If the URL is unfamiliar or complex, it is dynamically converted into feature matrices and evaluated by the trained Multi-Layer Perceptron deep learning model.

## Installation & Local Environment Setup

Follow these exact steps from scratch to clone and run this project on any local environment or laptop:

### Prerequisites
* **Python 3.11+** installed on the local system.
* **Node.js & npm** installed for running the frontend UI.

### Step 1: Backend Setup & Model Initialization

1. Open your terminal/command prompt and navigate into the `backend` folder:
   
   ```bash
   cd Phishing_Detection_System/backend
   ```
   
2. Install all required dependencies

    ```Bash
    pip install -r requirements.txt
    ```
    
3. Train the Deep Learning model locally. This script will download the dataset and compile the matching .pkl binary files directly calibrated to your system's environment:
   
    ```Bash
    python train.py
    ```
    (Wait 15–20 seconds for the [+] SUCCESS confirmation message, then you can close this terminal).

### Step 2: Frontend UI Setup (React + Vite)

1. Open a new, separate terminal window and navigate into the frontend folder:

    ```Bash
    cd Phishing_Detection_System/frontend
    ```

2. Install all node packages and user interface dependencies:

    ```Bash
    npm install
    ```

3. To launch both Backend & Frontend interfaces:

   Execute the following command. This will simultaneously spin up the Python Flask API server and the React Vite development server:

   ```Bash
   npm run dev
   ```

   What will happen next?

   * **Frontend Active:** Your current terminal will host the Vite local network framework running on http://localhost:5173.

   * **Backend Alert:** A new independent terminal window will instantly pop up, initializing the Flask backend deployment on http://127.0.0.1:5000.

   * **Action Required:** Open your browser and navigate to http://localhost:5173 to interact with the Website.

  
