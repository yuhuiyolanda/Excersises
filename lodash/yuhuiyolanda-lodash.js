var yuhuiyolanda = {
    compact: function(ary) {
      return ary.filter(it => it)
    },
    //keypoint for chunk: 如果 end 大于数组的长度，slice 也会一直提取到原数组末尾。
    chunk: function(arr, size = 1) {
      var ans = []       
    for(var i = 0;i < arr.length;i+=size){
     var item = arr.slice(i,i + size)
     ans.push(item)
     }
     return ans     
    },
    difference: function(arr,...values){
      var toExclude = [].concat(...values)
      return arr.filter(item => !toExclude.includes(item)) 
    },
   //keypoint for drop: 如果 begin 大于原数组的长度，则会返回空数组。
    drop: function(arr,n = 1){
      return arr.slice(n)
    },
    dropright:  function(arr,n){
      if(n >= arr.length){
        return []
      }else{
        return arr.slice(0,arr.length - n)
      }
    },
    fill: function(array,value,start = 0,end = array.length){
      for(var i = start;i < end;i++){
        array[i] = value 
      }
      return array        
    },
 
    flatten: function(array){
       return [].concat(...array)
    },

    flattenDeep: function(array){
      var result = []
        for(var item of array){
          if(Array.isArray(item)){
              result.push(...flattenDeep(item))
          }else{
            result.push(item)
          }
        }
        return result 
    },

    flattenDepth:function(array,depth = 1){
      var result = []
      for(var item of array){
        if(Array.isArray(item)){
          var flattedItem = flattenDepth(item, depth - 1)
          result.push(...flattedItem)
        }else{
          result.push(item)
        }
      }
      return result 
    },
    head:function(array){
        return array[0]
      },
    indexOf:function(array, value, fromIndex = 0) {
        if(fromIndex < 0){
            fromIndex = array.length + fromIndex
            if(fromIndex < 0) fromIndex = 0       
        }
        for(let i = fromIndex;i < array.length;i++){
            if(array[i] === value){
                return i 
            }
        }
        return -1
    },
    initial:function(array){
      array.pop()
      return array 
    },
    intersection:function(...arys){
      for(var i = 1;i < arguments.length;i++){
       arguments[0] = arguments[0].filter(it => arguments[i].includes(it))
      }
      return arguments[0]       
    },
    last:function(array){
      return array[array.length - 1]
    },
   concat: function(array,...value){
     var result = []
     for(var item of arguments){
       if(Array.isArray(item)){
         result.push(...item)
       }else{
         result.push(item)
       }
     }
     return result 
    },
    identity: function(value){
      return value 
    },
    isArray: function(value){
      return Object.prototype.toString.call(value) === "[object Array]"
    },
    isArguments: function(value){
      return Object.prototype.toString.call(value) === "[object Arguments]"
    },
    isBoolean: function(value){
      return Object.prototype.toString.call(value) === "[object Boolean]"
    },
    isDate: function(value){
      return Object.prototype.toString.call(value) === "[object Date]"
    },
    isFunction: function(value){
      return Object.prototype.toString.call(value) === "[object Function]"
    },
    isObject:function(value){
      return value instanceof Object 
    },
    isRegExp:function(value){
      return Object.prototype.toString.call(value) === "[object RegExp]"
    },
    isString: function(value){
      return  typeof value === 'string'
    },
    isUndefined: function(value){
      return  typeof value === 'undefined'
    },
    fromPairs:function(array){
      var result = {}
      for(var item of array){
        result[item[0]] = item[1]
      }
      return result 
    },
    reverse:function(array){
      var res = []
      for(var i = array.length - 1;i >= 0;i--){
        res.push(array[i])
      }
      return res 
    },
    negate:function(f){
      return function(...args){
        return !f(...args)
      }
    },
    join:function(array,str){
      var res = ''
      for(var i = 0;i < array.length - 1;i++){
         res = res + array[i] + str 
      }
      return res + array[i]
   },
   without:function(array,...values){
     var res = array.slice()
     for(var i = 1;i < arguments.length;i++){
      res = res.filter(it => it != arguments[i])
     }
     return res
   },
   pull:function(array,...values){
     var toExclude = []
     toExclude.push(...values)
     return array.filter(it => !toExclude.includes(it)) 
   },
   sortedIndex:function(array,value){
     for(var i = 0;i < array.length;i++){
       if(value == array[i]){
         return i 
       }
       if(array[i + 1] > value && array[i] < value){
         return i + 1
       }
     }
   },

   union:function(array,...values){
     var arr = array.concat(...values)
     var map = {}
     return arr.filter(it => {
       if(it in map){
         return false 
       }else{
         map[it] = 1
         return true 
       }
     }
    )
   },
   xor:function(array,...values){
    var arr = array.concat(...values)
    var map = {}
    for(var i = 0;i < arr.length;i++){
      if(arr[i] in map){
        map[arr[i]]++
      }else{
        map[arr[i]] = 1
      }
    }
    return arr.filter(it => map[it] == 1)
   },
   range:function(start = 0,end,step = 1){
     
     
   },
   omit:function(object,path){
     var res = {}
     for(var key in object){
       if(!path.includes(key)){
         res[key] = object[key]
       }
     }
     return res 
   },
   invert:function(object){
     var res = {}
     for(var key in object){
       res[object[key]] = key 
     }
     return res 
   },

   max:function(array){
     return array.length === 0 ? undefined:array.reduce(function(a,b){
       if(a > b) {return a}else{return b}
     },-Infinity)
   },
   min:function(array){
    return array.length === 0 ? undefined:array.reduce(function(a,b){
      if(a > b) {return b}else{return a}
    },Infinity)
  },
  
  ceil:function(number,precision = 0){
     return Math.ceil(number * 10 ** precision) /10 ** precision
  },
  

toArray:function(value){
var result = []
if(typeof value === 'string'){
  for(var i = 0;i < value.length;i++){
    result.push(value[i])
  }
}else if(typeof value === 'object'){
  for(var key in value){
    result.push(value[key])
  }
}
return result 
},
escape: function(str){
  var map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;"
  }
  var res = ''
  for(var i = 0;i < str.length;i++){
    if(str[i] in map){
      res += map[str[i]]
    }else{
      res += str[i]
    }
  }
  return res 
},
repeat:function(str = '',n = 1){
  var res = ''
  for(var i = 0;i < n;i++){
    res += str 
  }
  return res 
},
flip:function(f){
  return function(...args){
    return f(...args.reverse())
  }
},
It:function(value,other){
   return value < other 
},
Ite:function(value,other){
  return value <= other 
},

pad:function(string = '', length = 0, chars = ' '){
   var left = Math.floor((Math.ceil((length - string.length) / chars.length) / 2))
   for(var i = 0;i < left;i++){
     string = chars + string 
   } 
   while(string.length < length){
     string += chars 
   }
   string = string.slice(0,length)
   return string 
},
padEnd:function(string, length = 0, chars = ' '){
  while(string.length < length){
    string += chars 
  }
  string = string.slice(0,length)
  return string 
},
padStart:function(string, length = 0, chars = ' '){
  var times = Math.ceil((length - string.length)/chars.length)
  var left = ''
  for(var i = 0;i < times;i++){
    left += chars 
  }
  left = left.slice(0,length - string.length)
  return left + string 
}, 
spread:function(func, start = 0){
  return function(ary){
    return func.apply(null,ary)
  }
},


keys:function(object){
  var res = []
  for(var key in object){
    if(object.hasOwnProperty(key)){
      res.push(key)
    }
  }
  return res 
},

pick:function(object, paths) {
  var res = {}
  for(var key in object){
    if(paths.includes(key)){
       res[key] = object[key]
    }
  }
  return res 
},
add:function(augend, addend){
  return augend + addend
},
isError:function(value){
  return value instanceof Error 
},
defaults:function(object,...args){
  for(var arg of args){
    //遍历参数 for-of 
    for(var key in arg){
      if(!(key in object)){
        object[key] = arg[key]
      }
    }
  }
  return object
},

forOwn:function(obj, iteratee=_.identity){
   iteratee = _.iteratee(iteratee)
   var keys = Object.keys(obj)
   for(var i = 0;i < keys.length;i++){
    if((iteratee(obj[keys[i]], keys[i], obj) === false)){
      break 
    }else{
      iteratee(obj[keys[i]], keys[i], obj)
    }
   }
   return obj 
},
 differenceBy:function(array,...values){   
   if(Array.isArray(values[values.length - 1])){
     return this.difference(array,...values)
   }
    var values = [].concat(...values)
    var iteratee = values.pop()
    if(typeof iteratee == 'function'){
       return array.filter(it => !values.map(x => iteratee(x)).includes(iteratee(it)))
     }
    if(typeof iteratee == 'string'){
       return array.filter(it => !values.map(x => x[iteratee]).includes(it[iteratee]))
     }   
 },
 differenceWith:function(array,...values){
   var values = [].concat(...values)
   var comparator = values.pop()
   return array.filter(it => !values.some(val => comparator(val,it)))
 },

 dropRight:function(array,n = 1){
   if(n >= array.length) return []
   return  array.slice(0,array.length - n)
 },

 dropRightWhile:function(array,predicate){
     if(Array.isArray(predicate)){
       for(var i = array.length - 1;i >= 0;i--){
         if(array[i][predicate[0]] != predicate[1]){
         return array.slice(0,i + 1)   
         }   
       }
     }
     if(typeof predicate == 'function'){
      for(var i = array.length - 1;i >= 0;i--){
        if(!predicate(array[i])){
        return array.slice(0,i + 1)   
        }   
      }
     }
     if(typeof predicate == 'string'){
      for(var i = array.length - 1;i >= 0;i--){
       if(!array[i][predicate]){
       return  array.slice(0,i + 1)
       }
      }
     }
     if(typeof predicate == 'object'){
      for(var i = array.length - 1;i >= 0;i--){
        if(JSON.stringify(array[i]) != JSON.stringify(predicate) ){
         return array.slice(0,i + 1)
        }
       }
     }
  },
  dropWhile:function(array,predicate){
     return this.dropRightWhile(array.reverse(),predicate).reverse() 
  },

  findIndex:function(array,predicate,fromindex = 0){
    if(Array.isArray(predicate)){
      for(var i = fromindex;i < array.length;i++){
        if(array[i][predicate[0]] == predicate[1]){
        return i 
        }   
      }
    }
    if(typeof predicate == 'function'){
     for(var i = fromindex;i < array.length;i++){
       if(predicate(array[i])){
       return i  
       }   
     }
    }
    if(typeof predicate == 'string'){
     for(var i = fromindex;i < array.length;i++){
      if(array[i][predicate]){
      return i 
      }
     }
    }
    if(typeof predicate == 'object'){
     for(var i = fromindex;i < array.length;i++){
       if(JSON.stringify(array[i]) == JSON.stringify(predicate) ){
        return i 
       }
      }
    }
  },
  findLastIndex:function(array,predicate,fromindex = array.length - 1){
    if(Array.isArray(predicate)){
      for(var i = fromindex;i >= 0;i--){
        if(array[i][predicate[0]] == predicate[1]){
        return i 
        }   
      }
    }
    if(typeof predicate == 'function'){
     for(var i = fromindex;i >= 0;i--){
       if(predicate(array[i])){
       return i  
       }   
     }
    }
    if(typeof predicate == 'string'){
     for(var i = fromindex;i >= 0;i--){
      if(array[i][predicate]){
      return i 
      }
     }
    }
    if(typeof predicate == 'object'){
     for(var i = fromindex;i >= 0;i--){
       if(JSON.stringify(array[i]) == JSON.stringify(predicate) ){
        return i 
       }
      }
    }
  },

  intersectionBy:function(ary,...arrs){
    var arrs = [].concat(...arrs)
    if(typeof arrs[arrs.length - 1] == 'string'){
      iteratee = arrs.pop()
      return ary.filter(item => arrs.map(x => x[iteratee]).includes(item[iteratee]) )}
    else if(typeof arrs[arrs.length - 1] === 'function'){
      iteratee = arrs.pop()
      return ary.filter(item => arrs.map(x => iteratee(x)).includes(iteratee(item)))
    }else{
      iteratee = this.identity
      return ary.filter(item => arrs.map(x => iteratee(x)).includes(iteratee(item)))
    }
  },
  intersectionWith:function(array,other,comparator){
    return array.filter(item => { 
      for(var i = 0;i < other.length;i++){
        if(comparator(item,other[i])){
          return true 
        }
      }
      return false 
    })
  },
  lastIndexOf:function(array,value,fromIndex=array.length-1){
     for(var i = fromIndex;i >=0;i--){
       if(array[i] === value){
         return i 
       }
     }
     return -1
  },
  nth:function(array, n = 0){
    if(n >= 0){
      return array[n]
    }else{
      return array[array.length + n]
    }
  },
  pullAll:function(array,vals){
    return array.filter(item => {
      for(var i = 0;i < vals.length;i++){
        if(item == vals[i]){
          return false 
        }
      }
      return true 
    })
  },
  pullAllBy:function(arr,vals,iteratee){
    if(typeof iteratee == 'string'){
      return arr.filter(item => !vals.map(x => x[iteratee]).includes(item[iteratee]))
    }
    if(typeof iteratee == 'function'){
      return arr.filter(item => !vals.map(x => iteratee(x)).includes(iteratee(item)))
    }
  },
  pullAllWith:function(arr,vals,func){
    return arr.filter(item => {
      for(var i = 0;i < vals.length;i++){
        if(func(item,vals[i])){
          return false 
        }
      }
      return true 
    })
  },
  unzip:function(arr){
    var res = []    
      for(var j = 0;j < arr[0].length;j++){
        res[j] = []
        for(var i = 0;i < arr.length;i++){
        res[j][i] = arr[i][j]
      }
    }
   return res 
  },
  sortedIndexOf:function(array,value){ 
   //用变种二分法,注意审题:it performs a binary search on a sorted array.
    var left = 0
    var right = array.length - 1
    while(left <= right){
      var mid = (left + right) >> 1
      if(array[mid] >= value){
         right = mid - 1
      }else if(array[mid] < value){
         left = mid + 1 
      }
    }
    if(left < array.length && array[left] == value){
      return left 
    }
    return -1
  },
  sortedIndexBy:function(arr,val,func){
    if(typeof func == 'function'){
      arr = arr.map(item => func(item))
      val = func(val)
    }
    if(typeof func == 'string'){
      arr = arr.map(item => item[func])
      val = val[func]
    }
    return this.sortedIndex(arr,val)
  },  
  sortedLastIndexOf:function(array,value){
     //用变种二分法
     var left = 0
     var right = array.length - 1
     while(left <= right){
       var mid = (left + right) >> 1
       if(array[mid] > value){
         right = mid - 1
       }else if(array[mid] <= value){
         left = mid + 1
       }
     }
     if(right >= 0 && array[right] == value){
       return right 
     }
     return -1 
  },
  sortedUniq:function(array){
   //filter是传递了三个参数的 array[i],index,array
    return array.filter((item,index) => item !== array[index + 1])
  },
  sortedUniqBy:function(array,func){
    return array.filter((item,index) => func(item) !== func(array[index - 1]))
  },
 
  unionBy:function(...args){
    var arr = [].concat(...args)
    var iteratee = arr.pop()
    var map = []
    var res = []
    if(typeof iteratee == 'function'){
      for(var item of arr){
        if(!map.includes(iteratee(item))){
          map.push(iteratee(item))
          res.push(item)
        }
      }
      return res 
    }
    if(typeof iteratee == 'string'){
      for(var item of arr){
        if(!map.includes(item[iteratee])){
          map.push(item[iteratee])
          res.push(item)
        }
      }
      return res 
    }
   
  },
  uniq:function(array){
    var res = []
    for(var i = 0;i < array.length;i++){
      if(!res.includes(array[i])){
        res.push(array[i])
      }
    }
    return res 
  },

  uniqBy:function(array,iteratee){
    var res = []
    var map = []
    if(typeof iteratee == 'string'){
      for(var item of array){
        if(!map.includes(item[iteratee])){
          map.push(item[iteratee])
          res.push(item)
        }
      }
      return res 
    }else{
       for(var item of array){
         if(!map.includes(iteratee(item))){
           map.push(iteratee(item))
           res.push(item)
         }
       }
       return res 
    }   
  },
  zip:function(...arrays){
    var arr = []
    arr.push(...arrays)
    var res = []
    for(var i = 0;i < arr[0].length;i++){
       res[i] = []
       for(var j = 0;j < arr.length;j++){
         res[i][j] = arr[j][i]
       }
    }
    return res 
  },

  countBy:function(array,iteratee){
    var res = {}
    if(typeof iteratee == 'function'){
       for(item of array){
         if(!(iteratee(item) in res)){
             res[iteratee(item)] = 1
         }else{
             res[iteratee(item)]++
         }
       }
       return res 
    }
    if(typeof iteratee == 'string'){
      for(item of array){
        if(!(item[iteratee] in res)){
           res[item[iteratee]] = 1
        }else{
          res[item[iteratee]]++
        }
      }
      return res 
    }

  },

  every:function(collection, predicate = _.identity){
     var predicate = _.iteratee(predicate)
     for(var i = 0;i < collection.length;i++){
       if(!predicate(collection[i],i,collection)){
         return false 
       }
     }
     return true 
  },
  filter:function(collection, predicate = _.identity){
    var func = _.iteratee(predicate)
    var res = []
    for(var i = 0;i < collection.length;i++){
       if(func(collection[i],i,collection)){
         res.push(collection[i])
       }
    }
    return res 
  },
  find:function(collection, predicate = _.identity, fromIndex = 0){
    var func = _.iteratee(predicate)
    for(var i = fromIndex;i < collection.length;i++){
       if(func(collection[i],i,collection)){
         return collection[i]
       }
    }
    return undefined
  },
  flatMap:function(collection,func){
    return this.flatten(collection.map(item => func(item)))
  },
  flatMapDepth:function(collection, func, depth = 1){
    return this.flattenDepth(collection.map(item => func(item)),depth) 
  },
  forEach:function(collection, action){
    if(Array.isArray(collection)){
      for(var i = 0;i < collection.length;i++){
        action(collection[i])
      }
    }else{
      for(var key in collection){
        action(collection[key], key)
      }
    }
    return collection
  },
  groupBy:function(array,predicate = _.identity){
    var iteratee = _.iteratee(predicate)
    var res = {}
    for(var i = 0;i < array.length;i++){
      if(iteratee(array[i]) in res){          
          res[iteratee(array[i])].push(array[i])
      }else{
          res[iteratee(array[i])] = [array[i]]
      }
    }
    return res 
  },

  keyBy:function(array,predicate = _.identity){
    var func = _.iteratee(predicate)
    var res = {}
    for(var i = 0;i < array.length;i++){
      res[func(array[i])] = array[i]
    }
    return res 
  },
  map:function(collection,predicate = _.identity){
    var func = _.iteratee(predicate)
    var res =[]
    if(Array.isArray(collection)){
      for(var i = 0;i < collection.length;i++){
        res.push(func(collection[i],i,collection))
      }
    }else{
      for(var key in collection){
        res.push(func(collection[key],key,collection))
      }    
    }
    return res 
  },
  partition:function(array,predicate = _.identity){
    var func = _.iteratee(predicate)
    var left = array.filter(item => func(item))
    var right = array.filter(item => !func(item))
    var res = []
    res.push(left,right)
    return res 
  },
  
  sample:function(collection){
       collection = Object.entries(collection)
      //用Object.entries把数组/对象都变成二维数组
       return collection[Math.floor(Math.random() * collection.length)][1]
  },
  shuffle:function(array){
      var m = array.length, t, i;
      while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
      }
      return array;
    },
  
  size:function(collection){
    if(typeof collection == 'string' || Array.isArray(collection)){
      return collection.length
    }else{
      var len = 0
      for(var key in collection){
        len++
      }
      return len
    }    
  },
  some:function(collection,predicate = _.identity){
    var func = _.iteratee(predicate)
    for(var i = 0;i < collection.length;i++){
      if(func(collection[i])){
        return true 
      }
    }
    return false     
  },
 
  isEqual:function(value,other){

      //===可比较字符串,数值,布尔值,null,undefined,不可比较数组,对象
     if(typeof value === "number" || typeof value === "string" || typeof value === "boolean"){
        return value === other 
     }
     
     if(Object.prototype.toString.call(value) !== Object.prototype.toString.call(other) ){
         return false 
     }
     //两者类型应一致,排除一个为数组,一个为对象的情况
     var type = Object.prototype.toString.call(value)
     if(type.includes("Array") || type.includes("Object")){
         //若同为数组,或者同为对象
         var keys1 = Object.keys(value)
         var keys2 = Object.keys(other)
         if(keys1.length !== keys2.length){
             return false 
         }
         if(keys1.length === 0){
             return true 
             //空对象情况
         }
         for(var key in value){
             if(typeof value[key] === "object"){
                 if(this.isEqual(value[key],other[key])){
                     continue
                 }else{
                     return false 
                 }
             }
             else if(value[key] !== other[key]){
                 return false 
             }
         }
         return true 
     }  
  },
  // 大于 MAX_VALUE 的值代表 "Infinity"
  isFinite:function(value){
    if(typeof value !== 'number' || value == Infinity || value == -Infinity){
      return false
    }else{
      return true 
    }    
  },
  isMatch:function(object,source){
    //done
    if(object === source) {
      return true
    }
    for(var key in source){
      if(typeof source[key] == "object" && source[key] != null){
        if(!this.isMatch(object[key],source[key])){
          return false 
        }
      }else{
          if(source[key] != object[key]){
            return false 
          }
        }
      }
      return true 
    },
  isNaN:function(val){
    return Object.prototype.toString.call(val) === '[object Number]' && isNaN(val)
  },
  isNil:function(val){
    return val === undefined || val === null;
  },
  isNull:function(val){
    return val === null
  },
  isNumber:function(val){
    return Object.prototype.toString.call(val) === "[object Number]"
  },
  maxBy:function(array,predicate = _.identity){
    var predicate = _.iteratee(predicate)
    var max = -Infinity
    var res
    for(var i = 0;i < array.length;i++){
       if(predicate(array[i]) > max){
         max = predicate(array[i])
         res = array[i]
       }
    }
    return res 
  },
  functions:function(object){
     var res = []
     for(key in object){
       if(object.hasOwnProperty(key)){
         res.push(key)
       }
     }
     return res 
  },
  mapKeys:function(object,func){
     var res = {}
     for(var key in object){
       res[func(object[key],key,object)] = object[key]
     }
     return res 
  },
  mapValues:function(object,func = _.identity){
    var res = {}
    var iteratee = _.iteratee(func)
    for(var key in object){
      res[key] = iteratee(object[key])
    }
    return res 
  },
  toPairs:function(object){
    var res = []
    for(key in object){
      if(object.hasOwnProperty(key)){
        res.push([key,object[key]])
      }
    }
    return res 
  },
  constant:function(val){
    return function(){
      return val 
    }
  },
  times:function(n,func){
    var res = []
    for(var i = 0;i < n;i++){
      res.push(func(i))
    }
    return res 
  },
  property:function(path){
    return function(obj){
        return yuhuiyolanda.get(obj, path)
    }
},
  unescape:function(string = ""){
      return string.replace("&amp;", "&").replace("&lt;", "<").replace("&gt;", ">").replace("&apos;", "'")
  },
  values:function(object){
    var res = []
    if(typeof object == 'string'){
      for(var i = 0;i < object.length;i++){
        res.push(object[i])
      }
      return res 
    }else{
      for(var key in object){
        if(object.hasOwnProperty(key)){
          res.push(object[key])
        }
      }
      return res 
    }
  },
  findKey:function(obj,predicate = _.identity){
      predicate = _.iteratee(predicate)
      for(var key in obj){
        if(predicate(obj[key])){
          return key 
        }
      }
  },
  forIn:function(obj,predicate= _.identity){
       predicate = _.iteratee(predicate)
       for(var key in obj){
         if(predicate([obj[key]],key,obj) === false){
           break 
         }else{
          predicate([obj[key]],key,obj)
         }
       }
       return obj 
  },
  forInRight:function(obj,predicate= _.identity){
    predicate = _.iteratee(predicate)
    var keys = []
    for(var key in obj){
      keys.push(key)
    }
    keys = keys.reverse()
    for(var i = 0;i < keys.length;i++){
      if(predicate(obj[keys[i]],keys[i],obj) === false){
        break 
      }else{
        predicate(obj[keys[i]],keys[i],obj)
      }
    }
    return obj 
  },
  forOwnRight:function(obj,iteratee = _.identity){
       iteratee = _.iteratee(iteratee)
       var keys = Object.keys(obj)
       for (let i = keys.length - 1; i >= 0; i--) {
         if(iteratee(obj[keys[i]],keys[i],obj) === false){
           break 
         }else{
           iteratee(obj[keys[i]],keys[i],obj)
         }
       }
       return obj;
  },
  memoize:function(f){
    var cache = {}
    return function(arg){
       if(arg in cache){
         return cache[arg]
       }else{
         return cache[arg] = f(arg)
       }
    }
  },
  matches:function(src){
    //done
    return function(obj){
      return yuhuiyolanda.isMatch(obj,src)
      //return bind(isMatch,null,_,src)
    }
  },
  reduce:function(collection, reducer = identity, accumulator){
    var values = Object.values(collection)
    var keys = Object.keys(collection)
    if(accumulator === undefined){
      accumulator = values.shift()
      keys.shift()
    }
    for(var i = 0;i < keys.length;i++){
      accumulator = reducer(accumulator,values[i],keys[i])
    }
    return accumulator
  },
  reduceRight:function(collection, reducer = identity, accumulator){
    var values = Object.values(collection)
    var keys = Object.keys(collection)
    if(accumulator === undefined){
      accumulator = values.pop()
      keys.pop()
    }
    for(var i = keys.length - 1;i >= 0;i--){
      accumulator = reducer(accumulator,values[i],keys[i])
    }
    return accumulator
  },
  reject:function(collection,predicate){
     var predicate = yuhuiyolanda.iteratee(predicate)
     var ans = collection.slice()
    return ans.filter(item => !predicate(item))
  },
  
  round:function(number,precision = 0){
     var num = Math.floor(number * 10 * Math.pow(10,precision))
     if(num % 10 >= 5){
       return Math.floor(number * Math.pow(10,precision) + 1) / Math.pow(10,precision)
     }
     else{
      return Math.floor(number * Math.pow(10,precision)) / Math.pow(10,precision)
     }
  },
  defer:function(func,...rest){
    return setTimeout(function(rest){
      func(rest)
    },1)
  },
 
  delay:function(func, wait, ...rest) {
      return setTimeout(func(...rest),wait,...rest)
   },
  propertyOf:function(obj){
    //done
     return function(path){
       return get(obj,path)
     }
  },
  curry:function(f,length = f.length){
    //done
    return function(...args){
      if(args.length >= length){
        return f(...args)
      }else{
        return _.curry(f.bind(null,...args),length - args.length)
      }
    }
  },
  once:function(f){
    var flag = true
    var res
    return function(...arg){
      if(flag){
        res = f(...arg)
        flag = false
      }
      return res 
    }    
  },
  assignIn:function(object, ...args){
    for(var i = 0;i < args.length;i++){
      for(var key in args[i]){
        object[key] = args[i][key]
      }
    }
    return object
  },
  sumBy:function(array,iteratee){
    var res = 0
    var iteratee = _.iteratee(iteratee)
    for(var i = 0;i < array.length;i++){
       res += iteratee(array[i])
    }
    return res 
  },
  isElement:function(value){
    return Object.prototype.toString.call(value) === '[object HTMLBodyElement]'
  },
  get:function(obj, path, defaultval){
    //done
    if(typeof path == "string"){
      path = path.split(/\.|\[|\]./g)
    }    
    for(var i = 0;i < path.length;i++){
      if(obj === undefined){
        return defaultval
      }
      obj = obj[path[i]]
    }
    return obj 
  },
  toPath:function(str){
    //done
    return str.split(/\.|\[|\]./g)
  },
  isEmpty:function(obj){
    for(var key in obj){
      if(obj.hasOwnProperty(key)){
        return false  
      }
    }
    return true  
  },
  random:function(lower=0, upper=1, floating){
      var len = upper - lower
       if(arguments.length == 1){
          return Math.floor(Math.random() * arguments[0])
       }
       if(arguments.length == 2){
         if(typeof arguments[1] == "boolean"){
            if(arguments[1] === true){
               return Math.random() * arguments[0]
            }else{
               return Math.floor(Math.random() * arguments[0])
            }
         }
         if(typeof arguments[1] == "number" && upper == parseInt(upper)){          
            return Math.floor(lower + Math.random() * len )
         }
         if(typeof arguments[1] == "number" && upper != parseInt(upper)){
           return lower + Math.random() * len
         }
       }
       if(arguments.length == 3){
          if(floating === true){
            return lower + Math.random() * len 
          }else{
            return Math.floor(lower + Math.random() * len)
          }
       }
    },
  has:function(obj, path){
     if(typeof path === "string"){
       path = path.split(".")
     }
     for(var key of path){
       if(!obj.hasOwnProperty(key)){
         return false 
       }else{
         obj = obj[key]
       }
     }
     return true 
  },
  invoke:function(obj,path,...args){
      if (typeof path === "string") {
          path = path.split(/\.|\[|\]./g)
      }
      var func = path.pop()
      for (var i = 0; i < path.length; i++) {
          obj = obj[path[i]]
      }
      return obj[func](...args)
  },
  
  result:function(obj, path, defaultval){
    path = path.split(/\.|\[|\]./g)
    for(var i = 0;i < path.length;i++){
      if(obj[path[i]] === undefined){
        return typeof defaultval === "function" ? defaultval() : defaultval
      }else if (typeof obj[path[i]] === "function"){
         return obj[path[i]]()
      }else{
        obj = obj[path[i]]
      }
    }
    return obj 
  },
  ary:function(func,n = func.length){
     return function(...args){
       return func(...args.slice(0,n))
     }
  },
  unary:function(func){
    return function(...args){
      return func(...args.slice(0,1))
    }
 },
  range:function(){

  },
  mixin:function(){

  },
  uinqId:function(){

  },
  cloneDeep:function(){

  },
  merge:function(){

  },
  sortBy:function(){

  },

};
   


