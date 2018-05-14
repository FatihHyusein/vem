import React from 'react';
import PropTypes from 'prop-types';
import { Table, Input, InputNumber, Popconfirm, Form } from 'antd';

const FormItem = Form.Item;
const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
    <EditableContext.Provider value={form}>
        <tr {...props} />
    </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
    getInput = () => {
        if (this.props.inputType === 'number') {
            return <InputNumber size="small"/>;
        }
        return <Input size="small"/>;
    };

    render() {
        const {
            editing,
            dataIndex,
            title,
            inputType,
            record,
            index,
            ...restProps
        } = this.props;
        return (
            <EditableContext.Consumer>
                {(form) => {
                    const { getFieldDecorator } = form;
                    return (
                        <td {...restProps}>
                            {editing ? (
                                <FormItem>
                                    {getFieldDecorator(dataIndex, {
                                        rules: [
                                            {
                                                required: true,
                                                message: `Please Input ${title}!`,
                                            },
                                        ],
                                        initialValue: record[dataIndex],
                                    })(this.getInput())}
                                </FormItem>
                            ) : (
                                restProps.children
                            )}
                        </td>
                    );
                }}
            </EditableContext.Consumer>
        );
    }
}

export class EditableTableComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { editingKey: '' };
        this.actionColumn = {
            title: 'Actions',
            dataIndex: 'actions',
            render: (text, record) => {
                const editable = this.isEditing(record);
                const editBtn = <a onClick={() => this.edit(record.key)}>Edit</a>;
                const editingActionsBtns = (
                    <span>
                          <EditableContext.Consumer>
                            {form => (<a onClick={() => this.save(form, record.key)}>Save</a>)}
                          </EditableContext.Consumer>
                          <Popconfirm title="Sure to cancel?"
                                      onConfirm={() => this.cancel(record.key)}><a>Cancel</a>
                          </Popconfirm>
                    </span>
                );
                return (
                    <div className="editable-row-operations">
                        {editable ? editingActionsBtns : editBtn}
                    </div>
                );
            },
        };
    }

    isEditing = (record) => {
        return record.key === this.state.editingKey;
    };

    edit(key) {
        console.log(key);
        this.setState({ editingKey: key });
    }

    save(from, key) {
        from.validateFields((error, row) => {
            if (error) {
                return;
            }
            const newData = [...this.props.data];
            const index = newData.findIndex(item => key === item.key);
            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, {
                    ...item,
                    ...row,
                });
                this.setState({ editingKey: '' });
                this.props.onSave(newData)
            } else {
                newData.push(this.props.data);
                this.setState({ editingKey: '' });
                this.props.onSave(newData)
            }
        });
    }

    cancel = () => {
        this.setState({ editingKey: '' });
    };

    render() {
        const components = {
            body: {
                row: EditableFormRow,
                cell: EditableCell,
            },
        };

        const columns = [...this.props.columns, this.actionColumn].map((col) => {
            if (!col.editable) {
                return col;
            }
            return {
                ...col,
                onCell: record => ({
                    record,
                    inputType: 'text',
                    dataIndex: col.dataIndex,
                    title: col.title,
                    editing: this.isEditing(record),
                }),
            };
        });

        let data = this.props.data;
        if (this.props.newItem) {
            data = [this.props.newItem, ...this.props.data]
        }

        return (
            <Table
                rowKey={'id'}
                components={components}
                bordered
                dataSource={data}
                columns={columns}
            />
        );
    }
}


EditableTableComponent.propTypes = {
    data: PropTypes.array.isRequired,
    newItem: PropTypes.object,
    columns: PropTypes.array.isRequired,
    onSave: PropTypes.func.isRequired,
};
