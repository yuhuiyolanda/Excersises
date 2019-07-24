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
    indexOf:function(array,value,fromIndex = 0){
        for(i = fromIndex;i < array.length;i++){
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
     var res = []
     for(var i = start;i < end;i+=step){
       res.push(i)
     }
     return res 
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

forOwn:function(obj, iterator=_.identity){
   var hasown = Object.prototype.hasOwnProperty
   for(var key in obj){
     if(hasown.call(obj, key)){
       iterator(obj[key],key,obj)
     }
   }
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
//   输入：findIndex([{"user":"barney","active":false},{"user":"fred","active":false},{"user":"pebbles","active":true}],"function(o)  { \n        return  o.user  ==  'barney'; \n      }")
// 输出/期望：0
//函数:输出函数返回为真的index
// =================
// 输入：findIndex([{"user":"barney","active":false},{"user":"fred","active":false},{"user":"pebbles","active":true}],{"user":"fred","active":false})
// 输出/期望：1
//对象,输出一模一样的对象的index
// =================
// 输入：findIndex([{"user":"barney","active":false},{"user":"fred","active":false},{"user":"pebbles","active":true}],["active",false])
// 输出/期望：0
// =================
//数组,输出最早的属性和属性名相同的
// 输入：findIndex([{"user":"barney","active":false},{"user":"fred","active":false},{"user":"pebbles","active":true}],"active")
// 输出/期望：2
//字符串,输出字符串属性名为真的
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
};
   


