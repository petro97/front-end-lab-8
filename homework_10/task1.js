/*
  Your debounce function goes here */
function debounce(callback, time) {
    let timeout = null;
    return function() {
        const called = () => callback.apply(this);
        if(timeout) {
            clearTimeout(timeout);
            timeout = null;
        }
        timeout = setTimeout(called, time);
    }
}

// Example

let iterator = 0;

function increaseIteratorBy1() {
    iterator++;

    printIteratorValue();
}

function printIteratorValue() {
    console.log('Iterator value ', iterator);
}

let increaseIterator = debounce(increaseIteratorBy1, 1000);

increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator(); // Should print 'Iterator value 2'