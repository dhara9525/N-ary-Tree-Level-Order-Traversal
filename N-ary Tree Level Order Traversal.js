// Simple BFS javascript JS solution, faster than 100.00% of JavaScript online submissions 

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) 
{
    var list=[], queue=[], resArr=[];
    
    if(!root)
        return list;
    
    queue.push(root);
    while(queue.length>0)
    {
        var length=queue.length;
        var sum=0;
        for(var i=0; i< length; i++)
        {
            var tempNode=new TreeNode();
            tempNode=queue.shift();
            if (tempNode.left != null) 
            { 
                queue.push(tempNode.left); 
            } 
            if (tempNode.right != null) 
            { 
                queue.push(tempNode.right); 
            }
            sum+=tempNode.val;
        }
        resArr.push(sum/length);
    }
    console.log(resArr);
    return resArr;
};