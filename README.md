# VerifiAI

<p align="left">
<img src="https://github.com/SiawXuan15/DLW/blob/main/VerifiAI%20Logo.png" alt="VerifiAI" width="400"/>
   
## Overview

In an era where artificial intelligence (AI) is rapidly advancing and social media usage continues to grow, the public's exposure to fake news—whether AI-generated or otherwise—has significantly increased. Unfortunately, many people do not fact-check the information they encounter online due to the inconvenience of doing so. To address this issue, our team has developed **VerifiAI**, a browser extension designed to help users identify and verify potentially fake news directly within their browser.

VerifiAI allows users to highlight suspicious content, after which the extension analyzes the text and provides feedback on its validity. Although we initially aimed to implement this as a browser extension, due to Google's Manifest V3 content security policies, we have temporarily deployed VerifiAI as a web application. This README provides an overview of our project, its technical architecture, and how it works.

---

## 🚀 Demo
Here is a quick demo of our prototype. We hope you enjoy it.
> [YouTube Demo Link](https://www.youtube.com/watch?v=_gxqbRr5w40)

---

## Key Features

1. **Text Extraction from Images**:  
   VerifiAI uses Optical Character Recognition (OCR) to extract text from images shared by users. This ensures that even visual content can be analyzed for authenticity.

2. **Fact-Checking with RAG Model**:  
   The extracted text is processed by a Retrieval-Augmented Generation (RAG) model, which evaluates the validity of the claims. The model converts the text into embeddings and performs a similarity search using a vector database (Chroma) to cross-reference the information.

3. **Real-World Fact-Checking**:  
   VerifiAI integrates with **Google’s Fact Check Tools API** to provide real-world fact-checking information, ensuring the results are accurate and up-to-date.

4. **AI-Powered Response Generation**:  
   A language model (via **ChatGroq**) generates user-friendly responses, explaining the validity of the claims and providing additional context.

---

## How It Works

1. **User Input**:  
   Users highlight or upload suspicious text or images directly into the VerifiAI interface.

2. **Text Extraction**:  
   The OCR engine extracts text from images or processes the highlighted text.

3. **Data Processing**:  
   The extracted text is converted into embeddings and analyzed by the RAG model. The model performs a similarity search using the Chroma vector database to identify relevant information.

4. **Fact-Checking**:  
   VerifiAI cross-references the claims with Google’s Fact Check Tools API to retrieve real-world fact-checking data.

5. **Response Generation**:  
   The language model generates a response, summarizing the validity of the claims and providing additional context or sources.

6. **User Feedback**:  
   The results are displayed to the user in an easy-to-understand format, helping them make informed decisions about the content they encounter.

---

## Challenges and Future Work

### Challenges:
- **Google’s Manifest V3 Policies**: The current security policies restrict the implementation of certain features as a browser extension. As a result, we have temporarily deployed VerifiAI as a web application.

### Future Work:
- **Browser Extension**: Once the restrictions of Manifest V3 are addressed, we aim to deploy VerifiAI as a browser extension for seamless integration.
- **Multilingual Support**: Expanding the system to support multiple languages for global accessibility.
- **Improved OCR**: Enhancing the OCR engine to handle a wider variety of image qualities and formats.
- **User Feedback Loop**: Implementing a feedback mechanism to improve the system’s accuracy over time.
