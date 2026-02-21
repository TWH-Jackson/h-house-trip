import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, onSnapshot, addDoc, query, orderBy } from 'firebase/firestore';

function App() {
  const [plans, setPlans] = useState([]);
  const [inputText, setInputText] = useState("");

  // 當 App 開啟時，自動連線到 Firebase 監聽資料更新
  useEffect(() => {
    const q = query(collection(db, "travelPlans"), orderBy("timestamp", "asc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPlans(data);
    });
    return () => unsubscribe();
  }, []);

  // 送出行程到雲端
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    await addDoc(collection(db, "travelPlans"), {
      title: inputText,
      timestamp: new Date(),
      time: "10:00" // 預設時間
    });
    setInputText("");
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#4A4A4A] font-sans pb-20">
      <header className="p-10 pt-16">
        <h1 className="text-2xl font-light tracking-[0.3em] text-center">H-HOUSE TRIP</h1>
        <div className="w-10 h-[1px] bg-gray-300 mx-auto mt-4"></div>
      </header>

      <main className="max-w-md mx-auto px-8">
        <div className="space-y-8 relative">
          <div className="absolute left-[4px] top-0 bottom-0 w-[0.5px] bg-gray-200"></div>
          
          {plans.map((plan) => (
            <div key={plan.id} className="relative pl-8 animate-fade-in">
              <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-gray-400 border-2 border-white"></div>
              <p className="text-[10px] font-mono text-gray-400 uppercase tracking-tighter">{plan.time}</p>
              <h2 className="text-lg font-normal tracking-tight">{plan.title}</h2>
            </div>
          ))}
        </div>
      </main>

      {/* 輸入框 */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white to-transparent">
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-2">
          <input 
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="新增行程... (例如: 淺草寺參拜)"
            className="flex-1 bg-gray-50 border-none rounded-full px-5 py-3 text-sm focus:ring-1 focus:ring-gray-200 outline-none"
          />
          <button type="submit" className="w-12 h-12 bg-[#333] text-white rounded-full flex items-center justify-center">+</button>
        </form>
      </div>
    </div>
  );
}

export default App;