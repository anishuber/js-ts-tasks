/**
 * User class to represent User in this task.
 * @class
 * @property {string} firstName - The first name of the user.
 * @property {string} secondName - The second name of the user.
 * @property {number} age - The age of the user.
 */
class User {
  /**
   * The first name of the user.
   * @private
   * @type {string}
   */
  #firstName

  /**
   * The second name of the user.
   * @private
   * @type {string}
   */
  #secondName

  /**
   * The age of the user.
   * @private
   * @type {number}
   */
  #age

  /**
   * Creates an instance of the User class.
   * @constructor
   * @param {string} firstName - The first name of the user.
   * @param {string} secondName - The second name of the user.
   * @param {number} age - The age of the user.
   * @returns {User} instance of the User class
   */
  constructor(firstName, secondName, age)
  {
    this.firstName = firstName;
    this.secondName = secondName;
    this.age = age;
  }

  /**
   * Sets the first name of the User.
   * @param {string} firstName
   * @throws {Error} Throws an error if the first name is invalid.
   */
  set firstName(firstName)
  {
    if (typeof firstName !== "string" || firstName.trim() === '') {
      throw new Error("First name must be a string with contents");
    }
    this.#firstName = firstName;
  }

  /**
   * Sets the second name of the User.
   * @param {string} secondName
   * @throws {Error} Throws an error if the second name is invalid.
   */
  set secondName(secondName)
  {
    if (typeof secondName !== "string" || secondName.trim() === '') {
      throw new Error("Second name must be a string with contents");
    }
    this.#secondName = secondName;
  }

  /**
   * Sets the sge of the User.
   * @param {number} age
   * @throws {Error} Throws an error if the age name is invalid.
   */
  set age(age)
  {
    if (typeof age !== "number" || age < 0)
    {
      throw new Error("Age should be a natural number");
    }
    this.#age = age;
  }

  /**
   * Gets the age of the User.
   * @returns {number} age
   */
  get age() {
    return this.#age;
  }

  /**
   * Gets the full name of the User.
   * @returns {string} name
   */
  get name()
  {
    return `${this.#firstName} ${this.#secondName}`;
  }

  /**
   * Introduces the User.
   * @returns {string} introduction
   */
  introduce()
  {
    return `My name is ${this.name}, I'm ${this.#age}`;
  }
  
  /**
   * Celebrates the User's birthday by incrementing their age.
   * @returns {User} - To pass the final test because I can't otherwise((
   */
  celebrateBirthday()
  {
    this.#age += 1;
    return this;
  }
}


/**
 * Create a class named User
 * @type {User}
 */
module.exports.User = User;

/**
 * Create new User object and return it
 * @param {string} firstName
 * @param {string} secondName
 * @param {number} age
 * @returns {User}
 */
module.exports.createUser = function (firstName, secondName, age) {
  return new User(firstName, secondName, age);
};

/**
 * Create Array of Users by provided Array with user data (firstName, secondName, age)
 * @param {Array<{ firstName, secondName, age }>} data
 * @returns {Array<User>}
 */
module.exports.createUsers = function (data) {
  return data.map(curUser => new User(curUser.firstName, curUser.secondName, curUser.age));
};

/**
 * Find Users in Array of Users who's age equals the provided age
 * @param {Array<Users>} users
 * @param {number} age
 * @returns {Array<Users>}
 */
module.exports.findUsersByAge = function (users, age) {
  return users.filter(user => user.age === age);
};

/**
 * Return a function that sort provided Array of Users using a comparator function from TestUtils
 * @param TestUtils
 * @returns {function(*): *[]}
 */
module.exports.createUsersSortFn = function (TestUtils) {
  return (users) => users.sort(TestUtils.sortComparatorByAge);
};

/**
 * In Array of Users every User under odd index in Array should celebrate his birthday
 * @param {Array<User>} users
 * @return {Array<User>}
 */
module.exports.celebrate = function (users) {
  return users.map((value, index) => 
    (index % 2 === 0) ? value : value.celebrateBirthday()
  );
};
