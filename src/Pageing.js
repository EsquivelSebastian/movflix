export default function Pageing (props) {
  
    

    const getPage = () =>{
        const result = [];
        for(let i = 0; i < props.total; i++){
            let page = i +1;
        result.push( 
        <a onClick={ () =>  props.onChange(page) } 
        className= {props.page === page ? 'active' : '' } >
            {page}
        </a>);
    }
return result;
}
    return(
        <div className="topbar-filter">
        <div className="pagination2">
            <span>Page {props.page} of {props.total}:</span>

        {getPage()}
        </div>
    </div>
    )
}