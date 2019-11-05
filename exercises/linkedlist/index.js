// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        const node = new Node(data, this.head);
        this.head = node;
    }

    size() {
        let count = 0;
        let temp = this.head;
        while (temp) {
            count++;
            temp = temp.next;
        }
        return count;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if (!this.head) {
            return null;
        }
        let temp = this.head;
        while (temp) {
            if (!temp.next) return temp;
            temp = temp.next;
        }
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) return;
        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) return;
        if (!this.head.next) {
            this.head = null;
            return;
        }

        let previous = this.head;
        let node = this.head.next;
        while (node.next) {
            previous = node;
            node = node.next;
        }
        previous.next = null;
    }

    // insertLast(data) {
    //     let node = new Node(data);
    //     if (!this.head) this.head = node;
    //     let temp = this.head;
    //     while (temp.next) {
    //         temp = temp.next;
    //     }
    //     temp.next = node;
    // }

    insertLast(data) {
        const last = this.getLast();
        if (last) last.next = new Node(data);
        else this.head = new Node(data);
    }

    getAt(index) {
        if (!this.head) return null;
        let count = 0;
        let temp = this.head;
        while (temp) {
            if (count === index) return temp;
            count++;
            temp = temp.next;
        }
        return null;
    }

    removeAt(index) {
        if (!this.head) return;
        if (index === 0) {
            this.head = this.head.next;
            return;
        }
        const previous = this.getAt(index - 1);
        if (!previous || !previous.next) return;
        previous.next = previous.next.next;
    }

    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }
        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }
        const previous = this.getAt(index - 1) || this.getLast();
        const node = new Node(data, previous.next);
        previous.next = node;
    }
}

module.exports = { Node, LinkedList };
