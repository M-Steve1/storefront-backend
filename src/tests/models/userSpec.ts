import { clear } from 'console';
import { UserStore } from '../../models/user';

const userStore = new UserStore();

// Note: Populate your database tables with data to use for testing.
// Make sure to setup/edit the specs with the data before running it.
// Using the specs below without editing will cause test to fail because
// they were setup base of the data contained in my database.

// Some of the test will fail because of the hashed password.
// One way to make the test pass, is to test without password hashing or return user without the password.

fdescribe('User model', () => {
  it('Should have an index method', () => {
    expect(userStore.index).toBeDefined();
  });
  it('Should have create method', () => {
    expect(userStore.create).toBeDefined();
  });
  it('Should have show method', () => {
    expect(userStore.show).toBeDefined();
  });
  it('Should have an authenticate method', () => {
    expect(userStore.authenticate).toBeDefined();
  });

  beforeAll( async () => {
      const result = await userStore.create({
        first_name: 'modebe',
        last_name: 'stephen',
        user_name: 'Msteve1',
        password: 'password'
      });
      // @ts-ignore
      expect(result).toEqual({
        id: 1,
        first_name: 'modebe',
        last_name: 'stephen',
        user_name: 'Msteve1'
      });
    });

  it('Index method should return the list of all users', async () => {
    const result = await userStore.index();
    expect(result).toEqual([
       // @ts-ignore
      {
        id: 1,
        first_name: 'modebe',
        last_name: 'stephen',
        user_name: 'Msteve1'
      }
    ]);
  });

  it('Show method should return specified(id) user', async () => {
    const result = await userStore.show('1');
       // @ts-ignore
    expect(result).toEqual({
      id: 1,
      first_name: 'modebe',
      last_name: 'stephen',
      user_name: 'Msteve1'
    });
  });

  it(`Should login the user if the details are correct`, async () => {
    const result = await userStore.authenticate('Msteve1', 'password');
       // @ts-ignore
    expect(result).toEqual({
      id: 1,
      first_name: 'modebe',
      last_name: 'stephen',
      user_name: 'Msteve1',
    });
  });
});
