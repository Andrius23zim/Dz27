
//////Створити функцію mapping(array/obj,callback) для обектів та масивів.

function mapping(arrOrObj, callback) {
    // перевіряємо, чи є перший аргумент масивом
    if (Array.isArray(arrOrObj)) {
      // створюємо новий масив для зберігання змінених значень
      const newArr = [];
      // проходимося по кожному елементу масиву і викликаємо callback
      for (let i = 0; i < arrOrObj.length; i++) {
        newArr.push(callback(arrOrObj[i]));
      }
      // повертаємо новий масив зі зміненими значеннями
      return newArr;
    }
    // перевіряємо, чи є перший аргумент об'єктом
    if (typeof arrOrObj === 'object' && arrOrObj !== null) {
      // створюємо новий об'єкт для зберігання змінених значень
      const newObj = {};
      // проходимося по кожному значенню об'єкта і викликаємо callback
      for (const key in arrOrObj) {
        newObj[key] = callback(arrOrObj[key]);
      }
      // повертаємо новий об'єкт зі зміненими значеннями
      return newObj;
    }
    // якщо перший аргумент не є масивом або об'єктом, викликаємо alert
    alert('Перший аргумент має бути масивом або об\'єктом!');
  }
  



















////////////////////////////////////////////////////////

















