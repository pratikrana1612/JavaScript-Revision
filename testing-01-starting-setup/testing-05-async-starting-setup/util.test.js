jest.mock('./http')

const { loadTitle } = require("./util.js");

test("should print an uppercase text", () => {
  loadTitle().then(result=>{
    expect(result).toBe('DELECTUS AUT AUTEM')
  })
});
