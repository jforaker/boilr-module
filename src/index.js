/**
 * This function says hello.
 * @param {string} name a name to say hello to.
 * @returns {string} the greeting.
 */
const sayHello = (name = 'derf') => {
  const msg = `Hello, ${name}!`;
  console.log('log: ', msg);
  return msg;
};

export default sayHello;
