
function receivesAFunction(callback)
{
    callback();
}
function returnsANamedFunction()
{
    function fn()
    {

    }
        return fn
}
function returnsAnAnonymousFunction()
{

    return ()=>{}
}