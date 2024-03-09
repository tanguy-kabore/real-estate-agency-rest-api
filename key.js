import { randomBytes } from 'crypto';

const generateSecretKey = () => {
  const secretKey = randomBytes(32).toString('hex');
  return secretKey;
};

const secretKey = generateSecretKey();
console.log('Secret Key:', secretKey);
