require 'sinatra'

# Конфигурация
configure do
  set :bot_name, 'your_bot'  # Замените на имя вашего Telegram-бота
  set :public_folder, 'public'
  set :views, 'views'
end

# Главная страница
get '/' do
  @featured_items = [
    { name: 'Худи · Fushi', size: 'S · M · L · XL', price: 3500, art: 'ART 1', img: '/images/bes.png' },
    { name: 'Худи · Johan Liebert', size: 'M · L · XL', price: 4200, art: 'ART 2', img: '/images/monst.png' },
    { name: 'Худи · Lain', size: 'S · M · L · XL', price: 1500, art: 'ART 3', img: '/images/lai.png' },
    { name: 'Тотебэг «EXPERIMENT»', size: 'one size', price: 1200, art: 'ART 4', img: '/images/experiment-bag.jpg' },
    { name: 'Бейсболка «LAIN»', size: 'one size', price: 1800, art: 'ART 5', img: '/images/lain-cap.jpg' }
  ]

  @catalog_items = [
    { name: 'Худи · Fushi', size: 'S · M · L · XL', price: 3500, img: '/images/bes.png' },
    { name: 'Худи · Johan Liebert', size: 'M · L · XL', price: 4200, img: '/images/monst.png' },
    { name: 'Худи · Lain', size: 'S · M · L · XL', price: 1500, img: '/images/lai.png' },
    { name: 'Тотебэг — EXPERIMENT', size: 'one size', price: 1200, img: '/images/experiment-bag.jpg' },
    { name: 'Бейсболка — LAIN', size: 'one size', price: 1800, img: '/images/lain-cap.jpg' },
    { name: 'Футболка — ГРУСТЬ', size: 'S · M · L', price: 2200, img: '/images/sadness-tee.jpg' },
    { name: 'Худи — КИБЕР-НОЧЬ', size: 'M · L · XL', price: 4500, img: '/images/cyber-hoodie.jpg' },
    { name: 'Наклейка — ЭМБЛЕМА', size: '5×5 cm', price: 300, img: '/images/emblem-sticker.jpg' }
  ]

  erb :index
end