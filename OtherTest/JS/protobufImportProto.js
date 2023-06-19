const protobuf = require("protobufjs");

// Define your protocol buffer message type
const MyMessage = protobuf.Root.fromJSON({
  nested: {
    MyMessage: {
      fields: {
        id: {
          type: "int32",
          id: 1
        },
        name: {
          type: "string",
          id: 2
        },
        is_active: {
          type: "bool",
          id: 3
        },
        tags: {
          rule: "repeated",
          type: "string",
          id: 4
        }
      }
    }
  }
}).lookupType("MyMessage");

// Create a new message instance
const message = MyMessage.create({
  id: 1,
  name: "aaaa",
  is_active: true,
  tags: ["test"]
});

// Serialize the message instance to binary buffer
const buffer = MyMessage.encode(message).finish();
console.log(buffer);
