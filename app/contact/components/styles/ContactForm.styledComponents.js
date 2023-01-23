import styled, { css, keyframes } from 'styled-components'

export const FormSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-shadow: ${({ theme }) => theme.shadows.borderShadowBlock};
  flex: 1;
`

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;

  &:nth-child(3) {
    flex: 1;
  }

  & label {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 1.25em;
    color: var(--text-color-gray);
    background-color: var(--back-color);
    transition: background 0.5s ease-in-out;
  }

  & input,
  & textArea {
    flex: 1;
    background-color: var(--middle-color);
    color: var(--text-color-highlight);
    padding: 1.25em;
  }

  & svg {
    pointer-events: none;
    color: inherit;
    font-size: 0.5em;
    transition: color 0.2s ease-in-out;
  }

  & input:focus + label,
  & textArea:focus + label {
    background-color: var(--text-color-vivid);
    color: var(--back-color);
  }

  & input:not(:placeholder-shown) + label,
  & textArea:not(:placeholder-shown) + label {
    background-color: var(--text-color-vivid);
    color: var(--back-color);
  }
`

export const ContactSubmitButtom = styled.button`
  border: none;
  outline: none;
  background-color: var(--text-color-vivid);
  color: var(--back-color);
  font-weight: 600;
  font-size: 0.8em;
  padding: 1em 2em;
  width: fit-content;
  align-self: flex-end;
  font-family: inherit;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
  transition-property: background, filter;

  &:disabled {
    filter: brightness(0.6);
  }
`

export const ContactFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 1em;
  flex-wrap: wrap-reverse;
  gap: 1em;
`

export const ContactStatusMessage = styled.p`
  visibility: hidden;
  color: var(--text-color-vivid);
  flex: 1;
  min-width: fit-content;

  &:after {
    overflow: hidden;
    display: inline-block;
    vertical-align: bottom;
    content: '... ';
  }

  ${({ status }) => `
    ${
      status === 'ok'
        ? `
      color:rgb(33, 214, 103);
        visibility: visible;
      `
        : status === 'error' &&
          `
        color :rgb(247 95 49);
        visibility: visible;
      `
    } 
  `}
`

const ellipsis = keyframes`
  to {
    width: 1.2em;    
  }
`

export const StyledForm = styled.form`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.middleLight};
  padding: 2em;
  display: flex;
  flex-direction: column;
  gap: 1.25em;
  height: 100%;
  flex: 1;

  & ${ContactStatusMessage}:after {
    width: 0px;
    animation: ${({ sendingMessage, status }) =>
      sendingMessage && !status
        ? css`
            ${ellipsis} steps(5,end) 0.8s infinite
          `
        : ''
      };
    }
  
  
  ${({ sendingMessage, status }) =>
    sendingMessage &&
    !status &&
    `
      & ${ContactStatusMessage} {
        visibility: visible;
      }
    `}
`
