// node loop.js

const pendingTimers = []
const pendingOSTasks = []
const pendingOperations = []

// New timers, tasks, operations are recorded from loop.js
loop.runContents();

function shouldContinue() {
    return pendingOSTasks.length || pendingOperations.length || pendingTimers.length;
}

// the entire body of the loop executes in one tick
while (shouldContinue()) {
    // 3 checks to decide whelther or not the event loop should contitnue;
    // check 1. Any pending setTimeout, setInterval, or setImmediate
    // check 2. Any pending OS tasks like server listening to a port
    // check 3. Any pending long runing task like (fs module)

    // 1) Node looks at pendingTimers and sees if any functions are
    // ready to be called

    // 2) Node look at any pending OS tasks and pendign operations 
    // and calls relevant callbacks
    
    // 3) Pause execution, continue when ...
    //  a new pendingOSTask is done
    //  a new pendingOPeration is done
    //  a timer is about to complete
    
    // 4) Node looks at pendingTimers and calls any setImmediate
    
    // 5) Handle any 'close' events
}


// Exit back to the terminal