import { FlatList } from "react-native"
import { ListEmpty } from "../ListEmpty"
import { TaskProps } from "../../screens/Home";
import { ToDoCard } from "./ToDoCard";

type Props = {
    data: TaskProps[];
    removeTask: (taskIdToBeRemoved: number) => void;
    toggleTaskCheck: (taskIdToBeChecked: number) => void;
}

export function List({ data, removeTask, toggleTaskCheck }: Props) {
    return (
        <FlatList 
            data={data}
            keyExtractor={item => item.text}
            renderItem={({item}) => (
                <ToDoCard 
                    item={item}  
                    removeTask={removeTask}
                    toggleTaskCheck={toggleTaskCheck}              
                />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={<ListEmpty />}
        />
    )
}