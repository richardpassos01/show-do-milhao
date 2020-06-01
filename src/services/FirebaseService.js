import { firebaseDatabase } from './../util/firebaseUtils';

export default class FirebaseService {
    static getDataList = (nodePath, size = 10) => {

        return new Promise((resolve, reject) => {
            let query = firebaseDatabase.ref(nodePath).limitToLast(size);
            
            query.on('value', dataSnapshot => {
                let items = [];
                dataSnapshot.forEach(childSnapshot => {
                    let item = childSnapshot.val();
                    item['key'] = childSnapshot.key;
                    items.push(item);
                });
                resolve(items);
            });
        });
    };
}