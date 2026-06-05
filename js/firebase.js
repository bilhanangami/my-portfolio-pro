/* firebase.js — paste your config values below */

// Load Firebase from CDN (already added to your HTML in Part 3)

const firebaseConfig = {
  apiKey: "AIzaSyCkCPRfNSAxRwzBucaqJif8OFDT2g5sCBk",
  authDomain: "bilha-portfolio.firebaseapp.com",
  projectId: "bilha-portfolio",
  storageBucket: "bilha-portfolio.firebasestorage.app",
  messagingSenderId: "1067809857330",
  appId: "1:1067809857330:web:49df6d819a1a961f3e012b"

};

// Initialise Firebase
if (!firebase.apps || !firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Get Firestore
const db = firebase.firestore();
const messagesCollection = db.collection("messages");

// Save a contact message
async function saveMessage(name, email, subject, message) {
  const doc = {
    name, email, subject: subject || "(no subject)",
    message,
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    read: false
  };
  const ref = await messagesCollection.add(doc);
  return ref.id;
}

// Increment visitor counter
async function incrementVisitorCount() {
  const counterRef = db.collection("counters").doc("visits");
  try {
    await db.runTransaction(async (t) => {
      const snap = await t.get(counterRef);
      snap.exists
        ? t.update(counterRef, { count: firebase.firestore.FieldValue.increment(1) })
        : t.set(counterRef, { count: 1 });
    });
    const snap = await counterRef.get();
    const el = document.getElementById("visitor-count");
    if (el) el.textContent = snap.data().count.toLocaleString();
  } catch(e) { console.warn("Counter error:", e); }
}

window.firebaseHelpers = { saveMessage, incrementVisitorCount };
