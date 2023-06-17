import { PrettyChatWindow } from 'react-chat-engine-pretty'
const ChatsPage = (props) => {   
    return (
        <div style={{height: '100vh'}}>
            <PrettyChatWindow
             projectId='c5322a9a-7d33-4bbd-9f81-163562727cf5'
             username={props.user.username}
             secret={props.user.secret}
             style={{height: '100%'}}
             />
        </div>
    )
}

export default ChatsPage

