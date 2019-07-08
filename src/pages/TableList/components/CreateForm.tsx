import { Form, Input, Modal } from 'antd';

import { FormComponentProps } from 'antd/es/form';
import React, { Component } from 'react';

const FormItem = Form.Item;

interface CreateFormProps extends FormComponentProps {
  modalVisible: boolean;
  handleAdd: (
    fieldsValue: {
      desc: string;
    },
  ) => void;
  handleModalVisible: () => void;
}


class CreateForm extends Component<CreateFormProps> {
  
  okHandle = () => {
    const { form, handleAdd } = this.props;
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      form.resetFields();
      handleAdd(fieldsValue);
    });
  };

  render () {
    const { modalVisible, form, handleModalVisible } = this.props;
    return (
      <Modal
        destroyOnClose
        title="新建规则"
        visible={modalVisible}
        onOk={this.okHandle}
        onCancel={() => handleModalVisible()}
      >
        <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="描述">
          {form.getFieldDecorator('desc', {
            rules: [{ required: true, message: '请输入至少五个字符的规则描述！', min: 5 }],
          })(<Input placeholder="请输入" />)}
        </FormItem>
      </Modal>
    );
  }
};

export default Form.create<CreateFormProps>()(CreateForm);
