export class TreeNode {
    value: string;
    displayValue:string;
    children: TreeNode[];

    constructor(value: string, displayValue: string) {
        this.value = value;
        this.displayValue = displayValue
        this.children = [];
    }

    addChild(node: TreeNode): void {
        this.children.push(node);
    }
}

export class NaryTree {
    root: TreeNode | null = null;

    add(value: string,displayValue: string, parentValue: string | null = null): void {
        const newNode = new TreeNode(value, displayValue);

        if (this.root === null) {
            this.root = newNode;
            return
        } 
        if (parentValue !== null) {
            const parentNode = this.findNode(this.root, parentValue);
            if (parentNode) {
                parentNode.addChild(newNode);
                return
            } else {
                throw new Error(`Parent node with value ${parentValue} not found.`);
            }
        }

    }

    private findNode(node: TreeNode | null, value: string): TreeNode | null {
        if (node === null) {
            return null;
        }

        if (node.value === value) {
            return node;
        }

        for (const child of node.children) {
            const result = this.findNode(child, value);
            if (result !== null) {
                return result;
            }
        }

        return null;
    }

    // // Method to perform depth-first traversal
    // depthFirstTraverse(callback: (value: T) => void): void {
    //     this.depthFirstTraverseNode(this.root, callback);
    // }

    // private depthFirstTraverseNode(node: TreeNode<T> | null, callback: (value: T) => void): void {
    //     if (node !== null) {
    //         callback(node.value);
    //         for (const child of node.children) {
    //             this.depthFirstTraverseNode(child, callback);
    //         }
    //     }
    // }

    // // Method to perform breadth-first traversal
    // breadthFirstTraverse(callback: (value: T) => void): void {
    //     const queue: (TreeNode<T> | null)[] = [this.root];
    //     while (queue.length > 0) {
    //         const node = queue.shift();
    //         if (node) {
    //             callback(node.value);
    //             for (const child of node.children) {
    //                 queue.push(child);
    //             }
    //         }
    //     }
    // }
}
