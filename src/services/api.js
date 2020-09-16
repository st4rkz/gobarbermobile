import axios from 'axios';

/**
 *
 * Emulador do Android Studio padrão -> 10.0.2.2
 * Emulador Genymotion -> 10.0.3.2
 * iOS -> localhost
 * USB -> IP atual da maquina na rede (192.168.0.9)
 *
 */

const api = axios.create({
  baseURL: 'http://192.168.0.9:3333',
});

export default api;
