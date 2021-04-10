export const formatter = (commits) => {
    
    let result = {};
  
  commits.forEach(item => {

    let key = new Date(item.commit.committer.date);
    key=key.getFullYear()+'-' + (key.getMonth()+1) + '-'+key.getDate()
 
    if (!result[key]) {
      result[key] = [];
    }
    
    result[key].push(item);
  });

  Object.values(result).forEach((el) => {
    el.sort(function(a,b){
      return (new Date( new Date(b.commit.committer.date).getTime()-a.commit.committer.date).getTime());
    });
  })
  return result;
  };