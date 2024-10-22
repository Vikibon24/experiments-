import _ from 'lodash';

const ipToInt = (ipStr) => {
  const toInt = ipStr.split(".").reduce((int, num) => { 
    const result = int * 256 + parseInt(num, 10);
    return result;
  },
0);
return toInt;
};

const intToIp = (intNum) => {
  const binaryString = intNum.toString(2).padStart(32, '0');
  const chunks = _.chunk(binaryString.split(''), 8);;
  const ipParts = chunks.map(el => parseInt(el.join(''), 2));
  const ipAddress = ipParts.join('.');
return ipAddress; 
};

export default

console.log(ipToInt('128.32.10.1'), ipToInt('0.0.0.0'));
console.log(intToIp(2149583361), (0));
   