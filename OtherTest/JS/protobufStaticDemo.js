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

// Mock binary buffer data for deserialization
const buffer = Buffer.from([8, 2, 18, 5, 101, 120, 97, 109, 112, 24, 1, 34, 3, 116, 115, 115]);

// Deserialize the message from the binary buffer data
const message = MyMessage.decode(buffer);

// Access the message fields
console.log(message.id); // Output: 1
console.log(message.name); // Output: "example"
console.log(message.is_active); // Output: true
console.log(message.tags); // Output: ["test"]
