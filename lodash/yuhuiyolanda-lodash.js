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
      return Object.prototype.toString.call(value) === "[Object,Array]"
    },
    isArguments: function(value){
      return Object.prototype.toString.call(value) === "[Object,Arguments]"
    },
    isBoolean: function(value){
      return Object.prototype.toString.call(value) === "[Object,Boolean]"
    },
    isDate: function(value){
      return Object.prototype.toString.call(value) === "[Object,Date]"
    },
    isFunction: function(value){
      return Object.prototype.toString.call(value) === "[Object,Function]"
    },
    isObject:function(value){
      return value instanceof Object 
    },
    isRegExp:function(value){
      return Object.prototype.toString.call(value) === "[Object,RegExp]"
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
     return array == []?undefined:array.reduce(function(a,b){
       if(a > b) {return a}else{return b}
     })
   },
   min:function(array){
    return array == []?undefined:array.reduce(function(a,b){
      if(a > b) {return b}else{return a}
    })
  },
  ceil:function(number,precision){
     return Math.ceil(number * 10 ** precision) /10 ** precision
  }
  };
   


