const redis = require('redis');
const client = redis.createClient(); // this creates a new client

client.on('connect', () => {
  console.log('Redis client connected'); // 連線成功會log出資訊
});
client.set('foo', 'bar', redis.print);  // 建立一個 key 變數
client.get('foo', (error, result) => {  // 使用 key 取得 value
  if (error) {
    console.log(error);
    throw error;
  }
  console.log('GET result ->' + result);
});
