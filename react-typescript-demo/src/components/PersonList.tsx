import { Name } from "./Person";

type PersonListProps = {
    names: Name[]
}

export const PersonList = (props:PersonListProps) => {
    return (
        <div>   
            {props.names.map((name, index) => (
                <h2 key={index}>
                    {name.first} {name.last}
                </h2>
            ))}
        </div>
    );
}