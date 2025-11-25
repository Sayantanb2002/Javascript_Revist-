// ===============================
// Mini File System Simulattor
// ===============================

// Prototye Base Node --> Blueprint for creating metadata
function FSNode(name) {
  this.name = name;
  this.createdAt = new Date();
}

FSNode.prototype.rename = function (newName) {
  this.name = newName;
};

// ------- File Class (with private content) ----------
class File extends FSNode {
  #content = "";

  constructor(name) {
    super(name);
  }
  write(content) {
    this.#content = content;
  }
  read() {
    return this.#content;
  }
}

// ------- Folder Class ----------
class Folder extends FSNode {
  constructor(name) {
    super(name);
    this.children = {};
  }
  addNode(node) {
    this.children[node.name] = node;
  }
  removeNode(nodeName) {
    delete this.children[nodeName];
  }
  getNode(nodeName) {
    return this.children[nodeName];
  }
  listNodes() {
    return Object.keys(this.children);
  }
}

// ------- Async delay (Higher Order Function) ----------
const simulateDelay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// ------- File System "OS" Class ----------
class FileSystem {
  constructor() {
    this.root = new Folder("/");
    this.cwd = this.root; // current working directory
  }
  changeDir(name) {
    if (name === "..") {
      throw new Error("Parent navigation not implemented");
    }

    const folder = this.cwd.getNode(name);
    if (!(folder instanceof Folder)) {
      throw new Error(`${name} is not a folder`);
    }
    this.cwd = folder;
  }
  async createFile(name, content = "") {
    await simulateDelay(100); // Simulate async delay
    const file = new File(name);
    file.write(content);
    this.cwd.addNode(file);
  }

  async createFolder(name) {
    await simulateDelay(100); // Simulate async delay
    const folder = new Folder(name);
    this.cwd.addNode(folder);
  }

  async readFile(name) {
    await simulateDelay(100); // Simulate async delay
    const file = this.cwd.getNode(name);
    if (!(file instanceof File)) {
      throw new Error(`${name} is not a file`);
    }
    return file.read();
  }

  tree(folder = this.cwd, indent = "") {
    const spacing = "  ".repeat(indent);
    console.log(`${spacing}${folder.name}/`);

    for (const childName of folder.listNodes()) {
        const child = folder.getNode(childName);
        if (child instanceof Folder) {
            this.tree(child, indent + 1);
        } else {
            console.log(`${spacing}  ${child.name}`);
        }
    }
  }
}

// -------- Demo Usage --------
(async () => {
    const fs = new FileSystem();

    await fs.createFolder("projects");

    fs.changeDir("projects");

    await fs.createFolder("mern");
    await fs.createFile("readme.txt", "This is the MERN project folder.");

    fs.changeDir("mern");

    await fs.createFile("app.js", "console.log('Hello World');");
    await fs.createFile("package.json", '{ "name": "mern-app" }');

    fs.tree();
})();
