pragma solidity ^0.4.17;

contract Inbox {
    string public message;

    constructor (string initialMesage ) public {
        message = initialMesage;

    }
    function setMessage(string newMessage) public {
        message = newMessage;
    }
    function getMessage() public view returns (string){
        return message;
    }
}