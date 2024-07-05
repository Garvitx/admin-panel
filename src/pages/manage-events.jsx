import React, { useState } from 'react';
import { Button, List, Typography, Input, Modal, message, DatePicker, TimePicker, Upload } from 'antd';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import moment from 'moment';
import "antd/dist/reset.css";
const themeColors = {
  saffron: '#FF9933',
  white: '#FFFFFF',
  green: '#138808',
  blue: '#000080'
};

const ManageEvents = () => {
  const [events, setEvents] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [eventForm, setEventForm] = useState({
    eventName: '',
    startDate: null,
    endDate: null,
    startTime: null,
    endTime: null,
    image: null
  });

  const showAddEventModal = () => {
    setIsModalVisible(true);
  };

  const handleAddEvent = () => {
    if (!eventForm.eventName.trim()) {
      message.error('Event name cannot be empty');
      return;
    }
    setEvents([...events, { ...eventForm }]);
    setEventForm({
      eventName: '',
      startDate: null,
      endDate: null,
      startTime: null,
      endTime: null,
      image: null
    });
    setIsModalVisible(false);
    message.success('Event added successfully!');
  };

  const handleDeleteEvent = index => {
    const updatedEvents = events.filter((_, i) => i !== index);
    setEvents(updatedEvents);
    message.success('Event deleted successfully!');
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleChange = (name, value) => {
    setEventForm(prev => ({ ...prev, [name]: value }));
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <div style={{ margin: '24px' }}>
      <Typography.Title level={4} style={{ color: themeColors.saffron }}>Manage Events</Typography.Title>
      <Button type="primary" style={{ backgroundColor: themeColors.green, borderColor: themeColors.green }} onClick={showAddEventModal}>
        Add Event
      </Button>
      <List
        bordered
        dataSource={events}
        renderItem={(event, index) => (
          <List.Item
            actions={[
              <Button type="danger" icon={<DeleteOutlined />} onClick={() => handleDeleteEvent(index)}>
                Delete
              </Button>
            ]}
            style={{ borderColor: themeColors.blue }}
          >
            {event.eventName} - {event.startDate?.format('YYYY-MM-DD')} to {event.endDate?.format('YYYY-MM-DD')}
          </List.Item>
        )}
        style={{ marginTop: '16px' }}
      />
      <Modal
        title="Add a New Event"
        visible={isModalVisible}
        onOk={handleAddEvent}
        onCancel={handleCancel}
        okText="Add"
        cancelText="Cancel"
        okButtonProps={{ style: { backgroundColor: themeColors.green, borderColor: themeColors.green } }}
        cancelButtonProps={{ style: { color: themeColors.saffron } }}
      >
        <Input
          placeholder="Enter event name"
          value={eventForm.eventName}
          onChange={e => handleChange('eventName', e.target.value)}
        />
        <DatePicker
          style={{ width: '100%', marginTop: 12 }}
          placeholder="Select start date"
          value={eventForm.startDate}
          onChange={date => handleChange('startDate', date)}
        />
        <DatePicker
          style={{ width: '100%', marginTop: 12 }}
          placeholder="Select end date"
          value={eventForm.endDate}
          onChange={date => handleChange('endDate', date)}
        />
        <TimePicker
          style={{ width: '100%', marginTop: 12 }}
          placeholder="Select start time"
          value={eventForm.startTime}
          onChange={time => handleChange('startTime', time)}
        />
        <TimePicker
          style={{ width: '100%', marginTop: 12 }}
          placeholder="Select end time"
          value={eventForm.endTime}
          onChange={time => handleChange('endTime', time)}
        />
        <Upload
          listType="picture-card"
          fileList={eventForm.image ? [eventForm.image] : []}
          beforeUpload={file => {
            handleChange('image', file);
            return false;
          }}
          onRemove={() => handleChange('image', null)}
        >
          {eventForm.image ? null : uploadButton}
        </Upload>
      </Modal>
    </div>
  );
};

export default ManageEvents;
