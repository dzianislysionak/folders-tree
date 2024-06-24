import { NaryTree } from "./tree"

export const cleanPath = (path: string)=>{
    const pathArr = path.split('/')

    const parsedPathArr = pathArr.reduce((acc, subPath)=>{
        if (subPath === '..'){
            acc.pop()
            return acc
        }

        if (subPath === '.' || !subPath){
            return acc
        }

        return [...acc, subPath]
    },[] as string[])

    const parsedPath = parsedPathArr.join('/')

    return {
        pathArr: parsedPathArr, 
        pathName: `/${parsedPath}`,
        
    }
}

export const paths =[
    ['/dir/subdir/../file1.txt', '/dir/file.txt'],
    ['/dir2/subdir1/../file2.txt', '/file.txt'],
    ['/dir3/subdir2/../../file3.txt', '/file1.txt'],
    ['/dir4/subdir3/../../file4.txt', '/file2.txt'],
    ['/dir5/subdir4/../../file5.txt', '/file.txt'],
    ['/dir6/subdir5/../../../file6.txt', '/file.txt'],
    ['/dir7/subdir6/.././.././../file7.txt', '/file3.txt'],
    ['/dir8/subdir7/a/b/c/d/../../../../file8.txt', '/dir/subdir/file.txt'],
    ['/dir9//file9.txt', '/dir/file9.txt'],
    ['/dir10///file10.txt', '/dir/file10.txt'],
    ['/dir11////file11.txt', '/dir/file11.txt'],
    ['/dir12/', '/dir'],
    ['/dir13/..', '/'],
    ['/', '/'],
    ['///////////', '/'],
    ['/dir14/./././././file12.txt', '/dir/file3.txt'],
    ['/dir15/subdir8/../../../file13.txt', '/file.txt'],
    ['/dir16/subdir9/../../../subdir/../file14.txt', '/file.txt'],
    ['/dir17/subdir10/../../../sub_dir/subsubdir/../file15.txt', '/sub_dir/file.txt']
]

export const folderTree = new NaryTree();
folderTree.add('src', 'src')

paths.forEach(path=>{
    const cleanedPath = cleanPath(path[0])
   
    cleanedPath.pathArr.forEach((subPath,idx, originalArr)=>{
   
        const value =  originalArr.slice(0,idx+1).join('/')
        const par = idx === 0 ? 'src' : originalArr.slice(0,idx).join('/')
        folderTree.add(value,subPath, par)
    })
})