// TODO: Import your Header, TaskList, and TaskListItem

const {formatDate} = require

class Component {
  constructor(child) {
    if (child == null){
      return [];
    }
  }
  render() {
    throw new Error('Child class must implement render() method')
  }
  renderInnerHTML() {
    for (let i = 0; i < child.length; i++){
      child[i].render();
    }
  }
}

class Header extends Component{
  constructor() {
    super(children)
    ;
  }
  render()  {
    return `<header class="header"><h1>Todo Today</h1><p>{DATE_HERE}</p></header>`
  }
}

class TaskListItem extends Component{
  constructor(priority) {
    super(children)
    this.priority = priority;
  }
  render()  {
    return `<header class="header"><h1>Todo Today</h1><p>{DATE_HERE}</p></header>`
  }
}

function createDocument(title, tasks = []) {
  // TODO: Create a new Header
  // TODO: Create new TaskListItems from the provided tasks
  // TODO: Add TaskListItems to a new TaskList

  // TODO: Modify the template below to include your title, Header, and TaskList
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>YOUR TITLE HERE</title>
      <link rel="stylesheet" href="../dist/style.css" />
    </head>
    <body>
      <div class="card">
        YOUR HEADER
        YOUR TASKLIST
      </div>
    </body>
  </html>
  `;
}

module.exports = { createDocument };
