import Link from 'next/link'
import{  Modal, Upload, message, Button, Steps, Menu, Row, Col } from 'antd'
import { PlusOutlined ,UploadOutlined, SwapLeftOutlined, AppstoreAddOutlined, SettingOutlined } from '@ant-design/icons'
const { Step } = Steps;


function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };


const DefaultLayout = ({children}) => {
    return (
        <>
        
                <Menu theme='dark' mode='horizontal'>
                        <Menu.Item icon={<SwapLeftOutlined />}><Link href='/'>홈으로</Link></Menu.Item>
                        <Menu.Item icon={<AppstoreAddOutlined/>}><Link href='/About'>어바웃으로</Link></Menu.Item>
                        <Menu.Item icon={<SettingOutlined/>}><Link href='/board/list'>게시판으로</Link></Menu.Item>
                        <Menu.SubMenu title="board">
                    <Menu.Item>item 3</Menu.Item>
                    </Menu.SubMenu>
                </Menu>
                
                <Row>
                    <Col span={24}orientation="left" style={{background:'red'}}>asd</Col>
                </Row>  
                <Row>
                    <Col span={12} style={{background:'blue'}}>asd</Col>
                    <Col span={12} style={{background:'green'}}>asd</Col>
                </Row>
                <Row>
                    <Col span={6} style={{background:'green'}}>1515</Col>
                </Row> 
            <div>
                {children}
            </div>
                <Upload {...props}>
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
            <div>
                여기는 푸터
            </div>
            <Steps direction="vertical" current={1}>
                    <Step title="Finished" description="This is a description." />
                    <Step title="In Progress" description="This is a description." />
                    <Step title="Waiting" description="This is a description." />
                </Steps>
        </>
    )
}

export default DefaultLayout

