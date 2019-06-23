import func from '../func/index';

describe('Testing Functions in "func" folder', () => {
  describe('Testing fetchData', () => {
    // test('Testing when type is in API', async () => {
    //   const type = 'people'
    //   expect( await func.fetchData(type)).not.toBeNull();
    // });

    test('Testing when type is NOT in API', async () => {
      const type = 'foo'
      expect( await func.fetchData(type)).toBeNull();
    });
  });

  describe('Testing getData', () => {
    test('Testing when input parameter is given ', () => {
      const obj = ['one', 'two', 'three', 'four', 'five'];
      expect(obj).toContain(func.getData(obj));
    });

    test('Testing when input parameter is empty array ', () => {
      const obj = [];
      expect(func.getData(obj)).toBeNull();
    });

    test('Testing when input parameter is not given ', () => {
      expect(func.getData()).toBeNull();
    });
  });

  describe('Testing getWinner', () => {
    const pOne = {name: 'foo', mass: 2, length: 20, height: 10};
    const pTwo = {name: 'bar', mass: 5, length: 10, height: 10};

    test('Test when player One has lower attribute', () => {
      const attribute = 'mass';
      const result = func.getWinner(pOne, pTwo, attribute);
      expect(result).toBe('Player Two Wins');
    });

    test('Test when player One has Higher attribute', () => {
      const attribute = 'length';
      const result = func.getWinner(pOne, pTwo, attribute);
      expect(result).toBe('Player One Wins');
    });

    test('Test when it is draw', () => {
      const attribute = 'height';
      const result = func.getWinner(pOne, pTwo, attribute);
      expect(result).toBe('draw');
    });

    test('Test when attribute not given', () => {
      const attribute = 'mass';
      const result = func.getWinner(pOne, pTwo);
      expect(result).toBe('draw');
    });

    test('Test when no data given', () => {
      const attribute = 'mass';
      const result = func.getWinner();
      expect(result).toBe('draw');
    });
  });

});
