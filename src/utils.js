const colStyle = {
    height: 50,
    width: 50,
    border: '1px solid black',
    textAlign: 'center'
};


const tableStyle = {
    paddingLeft: '40%',
    paddingTop: '10%',
    display: 'inline'
};

const buttonStyle = {
    margin: 20,
    width: 100,
    height: 38,
    borderRadius: 6,
    fontSize: 'small',
    cursor: 'pointer'
};

function getRandomData() {
    const mySet = new Set();
    while(mySet.size < 9) {
        var k = parseInt(Math.random()*10);
        if(k === 0) continue;
        mySet.add(k)
    }
    return [...mySet];
}

function getColStyle(nextItem, value, won) {
    if(value < nextItem || won) return colStyle;
    return Object.assign({}, colStyle, {backgroundColor: 'black'});
}

export {tableStyle, buttonStyle, getColStyle, getRandomData};