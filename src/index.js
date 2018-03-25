/**
 * This function says hello.
 * @param name Some name to say hello for.
 * @returns The hello.
 */
const sayHello = (name = 'derf') => {
  const msg = `Hello, ${name}!`;
  console.log('log: ', msg);
  return msg;
};

export default sayHello;
