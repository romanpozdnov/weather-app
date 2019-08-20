import React, { memo } from 'react';
import { Input as searchInput } from 'antd';
import styles from 'styles/styles.module.css';

const { Search } = searchInput;

const SearchField = ({
  placeholder,
  enterButton,
  value,
  onSearch,
  onChange,
  ...rest
}) => {
  return (
    <div className={styles.searchInput}>
      <Search
        placeholder={placeholder}
        enterButton={enterButton}
        value={value}
        onSearch={onSearch}
        onChange={onChange}
        size="large"
        {...rest}
      />
    </div>
  );
};

export default memo(SearchField);
