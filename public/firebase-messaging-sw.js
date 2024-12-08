importScripts('https://www.gstatic.com/firebasejs/11.0.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.0.2/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyB8fF4Q-Hb2J6Iux-HzSywq02b44TbTKv4",
  authDomain: "text-push-ef788.firebaseapp.com",
  projectId: "text-push-ef788",
  storageBucket: "text-push-ef788.firebasestorage.app",
  messagingSenderId: "545938878715",
  appId: "1:545938878715:web:13457b1a3efb806d1a405e",
  measurementId: "G-QV67445TSC"
};

const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging(app);

messaging.onBackgroundMessage((payload) => {
    console.log('Mensaje en segundo plano:', payload);
    const { title, body, icon } = payload.notification;
    self.registration.showNotification(title, { body, icon });
});

 