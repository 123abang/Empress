"use client"


import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, AreaChart, Area } from 'recharts';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import Image from 'next/image';
import Img from './public/image copy.png'



// Initialize i18next
i18next
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          welcome: 'Welcome',
          bonusMessage: 'Welcome! Here is your bonus for investing {{amount}}',
          totalInvestment: 'Total Investment',
          totalProfit: 'Total Profit',
          invested: 'Invested',
          since: 'Since',
          investmentGrowth: 'Investment Growth',
          Stocks: 'Stocks',
          'Real Estate': 'Real Estate',
          Crypto: 'Cryptocurrency',
          portfolioValue: 'Portfolio Value'
        }
      },
      es: {
        translation: {
          welcome: 'Bienvenido',
          bonusMessage: '¡Bienvenido! Aquí está tu bono por invertir {{amount}}',
          totalInvestment: 'Inversión Total',
          totalProfit: 'Beneficio Total',
          invested: 'Invertido',
          since: 'Desde',
          investmentGrowth: 'Crecimiento de la Inversión',
          Stocks: 'Acciones',
          'Real Estate': 'Bienes Raíces',
          Crypto: 'Criptomoneda',
          portfolioValue: 'Valor del Portafolio'
        }
      }
    },
    lng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

const investments = [
  { name: "Stocks", amount: "$500", growth: "+12%", date: "Feb 14 2024" },
  { name: "Real Estate", amount: "$200", growth: "+9%", date: "Feb 14 2024" },
  { name: "Crypto", amount: "$400", growth: "-4%", date: "Feb 14 2024" },
];

function App() {
  const { t } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [totalProfit, setTotalProfit] = useState(0.001);
  const [stockData, setStockData] = useState([]);
  const [cryptoData, setCryptoData] = useState([]);
  const [realEstateData, setRealEstateData] = useState([]);
  
  // Function to generate random price movement
  const generateNewPrice = (lastPrice) => {
    const change = (Math.random() - 0.5) * 2; // Random value between -1 and 1
    return Math.max(0, lastPrice + change);
  };

  // Update profit counter
  useEffect(() => {
    const targetProfit = 300;
    const duration = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
    const increment = (targetProfit - 0.001) / (duration / 1000); // Amount to increment per second

    const interval = setInterval(() => {
      setTotalProfit(prev => {
        const newValue = prev + increment;
        return newValue >= targetProfit ? targetProfit : newValue;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Generate real-time market data
  useEffect(() => {
    const updateMarketData = () => {
      setStockData(prev => {
        const newData = [...(prev.length >= 20 ? prev.slice(1) : prev)];
        const lastPrice = newData.length > 0 ? newData[newData.length - 1].value : 100;
        newData.push({
          time: new Date().toLocaleTimeString(),
          value: generateNewPrice(lastPrice)
        });
        return newData;
      });

      setCryptoData(prev => {
        const newData = [...(prev.length >= 20 ? prev.slice(1) : prev)];
        const lastPrice = newData.length > 0 ? newData[newData.length - 1].value : 100;
        newData.push({
          time: new Date().toLocaleTimeString(),
          value: generateNewPrice(lastPrice)
        });
        return newData;
      });

      setRealEstateData(prev => {
        const newData = [...(prev.length >= 20 ? prev.slice(1) : prev)];
        const lastPrice = newData.length > 0 ? newData[newData.length - 1].value : 100;
        newData.push({
          time: new Date().toLocaleTimeString(),
          value: generateNewPrice(lastPrice)
        });
        return newData;
      });
    };

    // Update every 2 seconds
    const interval = setInterval(updateMarketData, 2000);
    return () => clearInterval(interval);
  }, []);

  const toggleLanguage = () => {
    const newLang = currentLanguage === 'en' ? 'es' : 'en';
    setCurrentLanguage(newLang);
    i18next.changeLanguage(newLang);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[url('https://images.unsplash.com/photo-1579547621706-1a9c79d5c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-fixed"
    >
      <div className="backdrop-blur-sm bg-white/80 min-h-screen p-4 md:p-8">
        <button 
          onClick={toggleLanguage}
          className="fixed top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100"
        >
          <Globe className="w-6 h-6" />
        </button>

        <motion.div 
          className="max-w-5xl mx-auto space-y-6"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
        >
          {/* Welcome Section */}
          <motion.div 
            className="text-center p-8 bg-white rounded-2xl shadow-xl mb-8"
            whileHover={{ scale: 1.02 }}
          >
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{t('welcome')} Jeorge!</h1>
            <p className="text-xl text-gray-600">
              {t('bonusMessage', { amount: '$1,000' })}
            </p>
          </motion.div>

          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="rounded-full overflow-hidden shadow-2xl"
            >
                        <Image 
            src={Img}
            alt="Profile"
            className="w-32 h-32 object-cover"
          />
            </motion.div>
          </div>

          {/* Investment Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              className="p-6 bg-white rounded-xl shadow-lg"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-lg font-semibold">{t('totalInvestment')}</h3>
              <CountUp
                end={1100}
                prefix="$"
                duration={2}
                className="text-3xl font-bold text-green-600"
              />
            </motion.div>

            <motion.div 
              className="p-6 bg-white rounded-xl shadow-lg"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-lg font-semibold">{t('totalProfit')}</h3>
              <CountUp
                end={totalProfit}
                decimals={3}
                prefix="$"
                duration={0}
                className="text-3xl font-bold text-green-600"
              />
            </motion.div>
          </div>

          {/* Investment Portfolio */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {investments.map((inv, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-xl shadow-lg"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h4 className="font-semibold text-xl mb-2">{t(inv.name)}</h4>
                <p className="text-gray-600">{t('invested')}: {inv.amount}</p>
                <p className="text-gray-600">{t('since')}: {inv.date}</p>
                <p className={inv.growth.startsWith('-') ? 'text-red-500' : 'text-green-500'}>
                  {inv.growth}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Live Charts */}
          <div className="grid grid-cols-1 gap-6">
            {/* Stocks Chart */}
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h3 className="text-xl font-semibold mb-4">{t('Stocks')}</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={stockData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Area 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#0088FE" 
                      fill="#0088FE" 
                      fillOpacity={0.3}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Crypto Chart */}
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h3 className="text-xl font-semibold mb-4">{t('Crypto')}</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={cryptoData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Area 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#FFBB28" 
                      fill="#FFBB28" 
                      fillOpacity={0.3}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Real Estate Chart */}
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h3 className="text-xl font-semibold mb-4">{t('Real Estate')}</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={realEstateData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Area 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#00C49F" 
                      fill="#00C49F" 
                      fillOpacity={0.3}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default App;