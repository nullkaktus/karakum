import User from './models/user';

export default function () {
  User.count().exec((err, count) => {
    if (count > 0) {
      return;
    }

    const user1 = new User({ name: 'Mildred', surname: 'Spurdle', school:"Université de Gafsa",dateAdded:"8/31/2016", cuid:"59909d07fc13ae3be6000000" });
    const user2 = new User({ name: 'Jodi', surname: 'Rasper', school:"Lenoir-Rhyne College",dateAdded:"12/11/2016", cuid:"59909d07fc13ae3be6000001" });



    User.create([user1, user2], (error) => {
      if (!error) {
        // console.log('ready to go....');
      }
    });
  });
}
