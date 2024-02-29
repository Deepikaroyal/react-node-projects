export const DBConfig ={
    name: 'MyDB',
    version: 1,
    objectStoresMeta: [
      {
        store: 'users',
        storeConfig: { keyPath: 'id', autoIncrement: true },
        storeSchema: [
          { name: 'name', keypath: 'name', options: { unique: false } },
          { name: 'email', keypath: 'email', options: { unique: false } }
        ]
      }
    ]
  };
