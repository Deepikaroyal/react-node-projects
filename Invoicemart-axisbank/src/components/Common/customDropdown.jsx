import * as React from "react";
import PropTypes from "prop-types";
import SelectUnstyled, {
  selectUnstyledClasses,
} from "@mui/base/SelectUnstyled";
import OptionUnstyled, {
  optionUnstyledClasses,
} from "@mui/base/OptionUnstyled";
import PopperUnstyled from "@mui/base/PopperUnstyled";
import { styled } from "@mui/system";

const StyledButton = (props) => styled("button")`
  font-family: Lato;
  font-size: 0.875rem;
  box-sizing: border-box;
  min-height: calc(1.5em + 10px);
  min-width: ${props.width ? props.width : "180px"};
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 0.6em;
  margin: 0.5em;
  padding: 6px;
  text-align: left;
  line-height: 1;
  color: #404040;

  &.${selectUnstyledClasses.focusVisible} {
    outline: 4px solid rgba(100, 100, 100, 0.3);
  }

  &.${selectUnstyledClasses.expanded} {
    border-radius: 0.75em 0.75em 0 0;

    &::after {
      content: "▴";
    }
  }

  &::after {
    content: "▾";
    float: right;
  }
`;

const StyledListbox = (props) => styled("ul")`
  font-family: Lato;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  background-color: #fff;
  min-width: ${props.width ? props.width : "180px"};
  border: 1px solid #ccc;
  border-top: none;
  color: #404040;
`;

const StyledOption = styled(OptionUnstyled)`
  list-style: none;
  padding: 4px 10px;
  margin: 0;
  border-bottom: 1px solid #ddd;
  cursor: default;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionUnstyledClasses.disabled} {
    color: #888;
  }

  &.${optionUnstyledClasses.selected} {
    ${"" /* background-color: #97144D; */}
    color: black;
  }

  &.${optionUnstyledClasses.highlighted} {
    ${"" /* background-color: #97144D; */}
    color: #404040;
  }

  &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
    ${"" /* background-color: #97144D; */}
    color: #404040;
  }

  &:hover:not(.${optionUnstyledClasses.disabled}) {
    ${"" /* background-color: #97144D; */}
    color: #404040;
  }
`;

const StyledPopper = styled(PopperUnstyled)`
  z-index: 1;
`;

function CustomSelect(props) {
  const components = {
    Root: StyledButton(props),
    Listbox: StyledListbox(props),
    Popper: StyledPopper,
    ...props.components,
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label
        style={{
          fontSize: "0.7rem",
          fontWeight: "bold",
          color: "black",
          marginLeft: "10%",
        }}
      >
        {props.label}
      </label>
      <SelectUnstyled {...props} components={components} />
    </div>
  );
}

CustomSelect.propTypes = {
  /**
   * The components used for each slot inside the Select.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: PropTypes.shape({
    Listbox: PropTypes.elementType,
    Popper: PropTypes.elementType,
    Root: PropTypes.elementType,
  }),
  label: PropTypes.string,
};

export default function UnstyledSelectObjectValues(props) {
  const [character, setCharacter] = React.useState(
    props.value ? props.value : props.data[0]
  );
  return (
    <div>
      <CustomSelect value={character} onChange={setCharacter} {...props}>
        {props.data.map((c) => (
          <StyledOption key={c.name || c.buId} value={c.value || c.userRole}>
            {c.name || c.userRole}
          </StyledOption>
        ))}
      </CustomSelect>
    </div>
  );
}
