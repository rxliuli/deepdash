import getEachDeep from './getEachDeep';

export default function getReduceDeep(_) {
  var eachDeep = getEachDeep(_);

  function reduceDeep(obj, iteratee, accumulator, options) {
    var accumulatorInited = accumulator !== undefined;
    eachDeep(
      obj,
      function(value, key, parent, context) {
        delete context['break'];
        if (!accumulatorInited) {
          accumulator = value;
          accumulatorInited = true;
        } else {
          accumulator = iteratee(accumulator, value, key, parent, context);
        }
      },
      options
    );
    return accumulator;
  }
  return reduceDeep;
}
