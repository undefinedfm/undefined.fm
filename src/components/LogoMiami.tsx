import * as React from 'react';

export interface LogoMiamiProps {
  size: number;
}

export function LogoMiami({ size, ...props }: LogoMiamiProps) {
  return (
    <svg
      width={Math.round(457 * size)}
      height={Math.round(60 * size)}
      viewBox="0 0 4569 594"
      {...props}
    >
      <defs>
        <path
          // tslint:disable-next-line:max-line-length
          d="M567.95 371.305h12.89c27.148 0 49.316 14.453 66.504 43.36l2.343 10.253c0 14.258-18.75 56.933-56.25 128.027-39.258 77.15-58.886 147.852-58.886 212.11v7.617C578.69 743.96 614.53 709 642.07 667.789c64.843-82.618 103.222-142.285 115.136-179.004l15.234-33.105c5.079 0 7.618-2.54 7.618-7.618l2.636-2.636h5.274v10.254h2.343c4.688-28.907 8.985-43.36 12.891-43.36h2.637v10.254h2.344v-20.508h5.273v7.618c6.055-3.125 13.672-15.918 22.852-38.38h2.636c16.993 15.821 25.489 40.528 25.489 74.122 0 112.5-72.363 240.331-217.09 383.496-27.735 17.187-59.277 25.781-94.63 25.781-65.43 0-108.983-23.925-130.663-71.777l-4.98-30.762v-12.598c0-67.187 13.671-126.855 41.015-179.004L524.59 404.41c14.453-22.07 28.906-33.105 43.36-33.105zm808.007 37.118c25.452-9.368 87.756-16.956 186.914-22.763h12.89c66.993 0 129.493 20.312 187.5 60.938 23.634 22.851 35.45 44.824 35.45 65.918 0 47.656-49.804 120.312-149.414 217.968-52.344 38.477-104.785 68.946-157.324 91.407-60.157 17.578-97.364 31.933-111.621 43.066l-27.832-2.637c-31.446 15.235-50.88 22.852-58.301 22.852l-2.637-2.637 7.617-12.597h-2.344l-15.234 4.98-2.637-15.234 4.98-9.961h-2.343l-12.598 4.98-2.636-2.637v-2.343l2.636-7.618h-2.636l-10.254 2.637c-5.078 0-7.617-3.418-7.617-10.254-8.399-1.172-12.598-3.71-12.598-7.617 7.422-8.008 18.457-14.746 33.105-20.215 28.907-22.07 68.555-91.405 118.946-208.008 30.469-70.117 45.703-109.863 45.703-119.238-27.672 0-49.618-16.462-65.838-49.387l-92.072 237.18c-24.61 45.508-49.219 109.668-73.828 192.48l-7.91 7.91h-7.91l-10.548-7.91-2.636 2.637h-13.184l-13.184-7.91-26.367 2.637-21.093-23.73v-18.458c0-7.812 6.152-26.269 18.457-55.37l-68.262-163.184-21.094-63.282h-2.637L920.098 754.215c-12.305 25.195-21.094 54.199-26.368 87.012l2.637 2.636v2.637c-2.93 14.063-6.445 21.094-10.547 21.094h-7.91l-26.367-15.82h-5.273l-10.547 2.636-7.91-2.637-5.274 5.274-2.637-2.637h-2.636l-2.637 2.637-23.73-31.64v-10.548c0-31.64 41.308-128.221 123.925-289.746l63.281-134.472c9.57-7.618 39.356-12.891 89.356-15.82 11.914 0 24.219 8.788 36.914 26.366v2.637c0 49.805 22.851 123.535 68.555 221.192 24.61-42.188 51.855-114.16 81.738-215.918 6.055-22.852 16.601-34.278 31.64-34.278 0-3.125 4.395-4.882 13.184-5.273h18.457c23.438 0 42.774 10.547 58.008 31.64v7.236zm75.586 317.08c143.555-66.992 215.332-130.37 215.332-190.136 0-39.258-31.25-63.77-93.75-73.535-12.5 0-21.777 15.137-27.832 45.41l-93.75 218.262zm1056.36-262.76c-46.951 6.657-120.36 14.85-220.227 24.577-18.75 0-30.762 14.746-36.035 44.239-2.344 0-7.813 13.867-16.407 41.601h2.637l72.07-5.273c8.399 10.937 14.844 16.406 19.336 16.406v14.062l5.567 8.204v2.636h-8.203v2.93h2.636l16.7-2.93 16.699 5.567v2.93l-2.93 2.636v2.93c11.133 2.344 16.7 5.078 16.7 8.203-22.266 17.773-86.914 37.207-193.946 58.3-61.133 119.337-97.168 186.817-108.105 202.442-14.844 0-22.266 2.734-22.266 8.203h-2.637l-8.496-5.566 2.93-2.637V881.07h-5.567c0 5.47-1.855 8.203-5.566 8.203-1.953-9.18-6.64-13.77-14.063-13.77v2.638c-1.171 9.375-3.906 14.062-8.203 14.062l-2.636-2.93h-2.93l-5.566 5.567-11.133-13.77c-5.47 0-8.203-2.832-8.203-8.496 0-16.475 7.044-42.519 21.133-78.132-17.027 3.497-36.279 7.178-57.755 11.042-100.586 16.993-150.878 32.13-150.878 45.41-2.344 8.79-9.864 16.31-22.559 22.56h-2.637l-14.941-12.599h-5.274l-12.597 2.637c0-4.297-8.3-8.496-24.903-12.597l-7.617 2.343-2.636-2.343v-2.637l2.636-7.617h-4.98l-2.637 2.636h-2.344l-2.636-2.636v-2.344c13.867-49.805 75.878-190.624 186.035-422.461 0-16.797 11.718-26.856 35.156-30.176l98.145 2.637 98.144-7.617c0 6.64 3.32 9.96 9.961 9.96v4.981h-7.617v2.637c8.398 0 12.597 1.66 12.597 4.98v2.637h-9.96c0 5.078 4.98 7.617 14.94 7.617v4.98h-7.616v2.344h30.176l2.22 1.224c13.724-23.081 26.753-34.622 39.088-34.622l44.531 11.133c99.415-12.89 187.11-19.336 263.086-19.336 0 2.93 6.543 6.64 19.63 11.133 0 6.836 4.589 11.425 13.769 13.77v2.929l-2.637 2.637v2.93c.445 0 .876.006 1.293.02 7.734-17.397 18.631-26.095 32.691-26.095h16.114c32.422 0 57.617 14.355 75.586 43.066v10.84c0 5.078-17.09 35.645-51.27 91.7l-118.652 245.507c-15.43 28.32-26.27 44.532-32.52 48.633l-2.637-2.93h-2.636l-5.567 13.477h-5.273l5.273-18.75-29.59 48.633h-2.636l-2.637-2.637v-2.93l2.637-2.636v-5.274h-2.637l-10.84 24.317h-5.566v-2.93l5.566-13.477-43.36 35.157-7.91-5.274 2.637-2.93v-7.91l-8.203 5.274-5.273-5.274c0-22.382 58.076-161.53 174.23-417.448zm-362.086-7.036c-14.557 2.545-33.482 5.173-56.774 7.883-21.094 0-61.23 11.718-120.41 35.156l-27.832 55.371h2.637c8.984-3.32 34.96-5.86 77.93-7.617l4.98 7.617-7.618 2.637v2.344c13.477 0 20.215 1.66 20.215 4.98l-12.597 5.274v2.343h4.98l-2.344 7.617c0 8.399 6.64 15.137 19.922 20.215v2.344l-2.343 2.637v2.344c8.398 0 12.597 1.757 12.597 5.273v2.344c0 5.078-52.831 18.457-158.496 40.136-13.086 0-29.883 25.196-50.39 75.586l181.054-30.175v4.98h2.637l8.311-1.74c7.242-14.772 15.116-30.403 23.622-46.893 44.448-88.895 71.087-155.78 79.919-200.656zm367.738 281.809v4.394h-2.344v-4.394h2.344zm933.082-316.7a198.47 198.47 0 0 1-.856-2.05c0-14.258 66.699-25.293 200.098-33.106h12.89c66.993 0 129.492 20.312 187.5 60.938 23.633 22.851 35.45 44.824 35.45 65.918 0 47.656-49.804 120.312-149.414 217.968-52.344 38.477-104.785 68.946-157.325 91.407-60.156 17.578-97.363 31.933-111.62 43.066l-27.833-2.637c-31.445 15.235-50.879 22.852-58.3 22.852l-2.637-2.637 7.617-12.597h-2.344l-15.234 4.98-2.637-15.234 4.98-9.961h-2.343l-12.598 4.98-2.636-2.637v-2.343l2.636-7.618h-2.636l-10.254 2.637c-5.079 0-7.618-3.418-7.618-10.254-8.398-1.172-12.597-3.71-12.597-7.617 7.422-8.008 18.457-14.746 33.105-20.215 8.54-6.52 18.017-17.165 28.432-31.936-23.74 8.472-69.057 18.726-135.951 30.764-100.587 16.993-150.88 32.13-150.88 45.41-2.343 8.79-9.862 16.31-22.558 22.56h-2.637l-14.94-12.599h-5.274l-12.598 2.637c0-4.297-8.3-8.496-24.902-12.597l-7.618 2.343-2.636-2.343v-2.637l2.636-7.617h-4.98l-2.637 2.636h-2.343l-2.637-2.636v-2.344c13.867-49.805 75.878-190.624 186.035-422.461 0-16.797 11.719-26.856 35.156-30.176l98.145 2.637 98.144-7.617c0 6.64 3.32 9.96 9.961 9.96v4.981h-7.617v2.637c8.399 0 12.598 1.66 12.598 4.98v2.637h-9.961c0 5.078 4.98 7.617 14.941 7.617v4.98h-7.617v2.344h26.344zm17.869 31.36c-15.366 3.627-40.162 7.431-74.389 11.414-21.094 0-61.23 11.718-120.41 35.156l-27.832 55.371h2.637c8.984-3.32 34.96-5.86 77.93-7.617l4.98 7.617-7.617 2.637v2.344c13.476 0 20.215 1.66 20.215 4.98l-12.598 5.274v2.343h4.98l-2.343 7.617c0 8.399 6.64 15.137 19.921 20.215v2.344l-2.343 2.637v2.344c8.398 0 12.597 1.757 12.597 5.273v2.344c0 5.078-52.831 18.457-158.496 40.136-13.086 0-29.882 25.196-50.39 75.586l181.054-30.175v4.98h2.637l12.598-2.637c2.148 8.399 6.347 12.598 12.597 12.598v7.617c-4.101 0-8.3 2.54-12.597 7.617h-5.274v2.344h15.235v5.274H3345l2.637 2.343v2.637l-2.637 2.344c24.805 0 38.184 4.199 40.137 12.597l-2.344 2.637c2.49.348 4.612.816 6.364 1.404 23.086-35.95 50.36-90.325 81.82-163.123 30.468-70.117 45.703-109.863 45.703-119.238-20.55 0-37.94-9.078-52.174-27.233zm-419.213-82.63h18.457c23.438 0 42.773 10.548 58.008 31.642v7.91l-100.195 258.105c-24.61 45.508-49.22 109.668-73.829 192.48l-7.91 7.91h-7.91l-10.547-7.91-2.637 2.637h-13.183l-13.184-7.91-26.367 2.637-21.094-23.73v-18.458c0-7.812 6.153-26.269 18.457-55.37l-68.261-163.184-21.094-63.282h-2.637l-105.469 221.192c-12.304 25.195-21.093 54.199-26.367 87.012l2.637 2.636v2.637c-2.93 14.063-6.445 21.094-10.547 21.094h-7.91l-26.367-15.82h-5.274l-10.547 2.636-7.91-2.637-5.273 5.274-2.637-2.637h-2.637l-2.636 2.637-23.73-31.64v-10.548c0-31.64 41.307-128.221 123.925-289.746l63.281-134.472c9.57-7.618 39.355-12.891 89.356-15.82 11.914 0 24.218 8.788 36.914 26.366v2.637c0 49.805 22.851 123.535 68.554 221.192 24.61-42.188 51.856-114.16 81.739-215.918 6.054-22.852 16.601-34.278 31.64-34.278 0-3.125 4.395-4.882 13.184-5.273zm489.258 355.958c143.555-66.993 215.332-130.37 215.332-190.137 0-39.258-31.25-63.77-93.75-73.535-12.5 0-21.777 15.137-27.832 45.41l-93.75 218.262zM4499.68 421.59c13.987-32.547 26.034-48.82 36.14-48.82l31.64-5.274h13.185c20.117 0 37.695 13.184 52.734 39.55l-5.274 105.47c0 29.687 4.395 53.515 13.184 71.484 3.711-.195 21.387-17.87 53.027-53.027 5.86-1.758 41.016-36.035 105.47-102.832 24.218-33.399 48.925-50.098 74.12-50.098l18.457-2.637c17.188 3.907 26.856 9.18 29.004 15.82 3.906 0 11.817 7.032 23.73 21.094v5.274c0 17.773-25.585 82.91-76.757 195.41-17.383 42.188-28.809 63.281-34.278 63.281l2.637 2.637v2.637l-34.277 68.554c-3.125.196-17.188 29.297-42.188 87.305l-18.457 23.73h-18.457v-5.273l-10.547 5.273c0-3.906-6.152-7.421-18.457-10.546l-5.273 5.273c-4.883-.586-8.398-4.98-10.547-13.184-7.031 0-10.547-1.757-10.547-5.273v-18.457c0-34.18 26.367-100.195 79.102-198.047-27.54 25.39-53.906 57.031-79.102 94.922-5.86 0-13.867 5.273-24.023 15.82h-2.637c-18.75-13.086-36.328-20.996-52.734-23.73-17.774-12.11-33.594-48.144-47.461-108.106h-2.637c-76.758 176.173-119.043 267.676-126.855 274.512h-5.274l-13.183-7.91-7.91 2.637-2.637-2.637-2.637 2.637-5.274-10.547-5.273 5.273-2.637-2.637-23.73 5.274c-3.906-9.57-9.18-14.844-15.82-15.82v-10.547c0-42.188 50.194-161.913 150.586-359.18 2.42-7.38 4.794-14.381 7.124-21.005-44.888 7.123-124.704 16.273-239.449 27.45-18.75 0-30.761 14.746-36.035 44.239-2.344 0-7.812 13.867-16.406 41.601h2.637l72.07-5.273c8.398 10.937 14.844 16.406 19.336 16.406v14.062l5.566 8.204v2.636h-8.203v2.93h2.637l16.7-2.93 16.698 5.567v2.93l-2.93 2.636v2.93c11.133 2.344 16.7 5.078 16.7 8.203-22.266 17.773-86.914 37.207-193.945 58.3-61.134 119.337-97.168 186.817-108.106 202.442-14.844 0-22.266 2.734-22.266 8.203h-2.636l-8.496-5.566 2.93-2.637V881.07h-5.567c0 5.47-1.856 8.203-5.567 8.203-1.953-9.18-6.64-13.77-14.062-13.77v2.638c-1.172 9.375-3.906 14.062-8.203 14.062l-2.637-2.93h-2.93l-5.566 5.567-11.133-13.77c-5.469 0-8.203-2.832-8.203-8.496 0-33.203 28.613-105.273 85.84-216.21 55.469-110.939 83.203-187.598 83.203-229.981 14.649-25.977 28.516-38.965 41.602-38.965l44.53 11.133c99.415-12.89 187.11-19.336 263.087-19.336 0 2.93 6.543 6.64 19.629 11.133 0 6.836 4.59 11.425 13.77 13.77v2.929l-2.637 2.637v2.93c7.226 0 10.84 1.855 10.84 5.566l-2.637 2.636c1.465 0 2.992.258 4.582.774zm-633.39 315.34h8.202c12.11 0 23.926 8.007 35.45 24.023v2.93C3888.456 793.96 3876.25 809 3873.32 809h-1.465c-5.664-1.953-8.496-4.297-8.496-7.031l-1.464 1.465h-1.465c-11.72 0-21.582-5.176-29.59-15.528v-4.394c0-9.18 8.496-24.219 25.488-45.117l9.961-1.465z"
          id="prefix__b"
        />
        <filter
          x="-.7%"
          y="-5.6%"
          width="102%"
          height="122.5%"
          filterUnits="objectBoundingBox"
          id="prefix__a"
        >
          <feOffset
            dx={30}
            dy={60}
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.949019608 0 0 0 0 0.28627451 0 0 0 0 0.811764706 0 0 0 1 0"
            in="shadowOffsetOuter1"
            result="shadowMatrixOuter1"
          />
          <feOffset
            dx={15}
            dy={30}
            in="SourceAlpha"
            result="shadowOffsetOuter2"
          />
          <feColorMatrix
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
            in="shadowOffsetOuter2"
            result="shadowMatrixOuter2"
          />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="shadowMatrixOuter2" />
          </feMerge>
        </filter>
      </defs>
      <g transform="translate(-417 -367)" fill="none" fillRule="evenodd">
        <use fill="#000" filter="url(#prefix__a)" xlinkHref="#prefix__b" />
        <use fill="#00FFF4" xlinkHref="#prefix__b" />
      </g>
    </svg>
  );
}

(LogoMiami as any).displayName = 'LogoMiami';
